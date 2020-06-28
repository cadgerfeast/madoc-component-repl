<script>
  import { onMount } from 'svelte';
  import { frame, omit, setIframeContent, templateWithContext } from './utils.js';
  export let context;
  export let theme;
  export let themes;

  let rootElement;
  let sliderElement;
  let editorElement;
  let editorContainer;
  let iframeContainer;
  let editor;
  let iframe;

  let fullScreen = false;

  $: height = context.height || '300px';
  $: width = context.width || '100%';

  let curProjectIndex = 0;
  let curFileIndex = 0;
  let fileChange = {};

  $: hasChange = (name) => {
    return fileChange[`${name}-${curProjectIndex}-${curFileIndex}`];
  };
  $: curFile = () => {
    return context.projects[curProjectIndex].files[curFileIndex];
  }
  $: files = () => {
    if (context.projects.length > 1) {
      const files = [];
      for (const project of context.projects) {
        files.push(project.files[0]);
      }
      return files;
    } else {
      return context.projects[0].files;
    }
	};

  $: fileContext = () => {
    const result = {};
    for (const file of context.projects[curProjectIndex].files) {
      result[file.tpl] = file.userCode;
    }
    return result;
	};

  onMount(async () => {
    require.config({ paths: { 'vs': '/assets/monaco-editor/vs' }});
    require(['vs/editor/editor.main'], () => {
      initialize();
      generateEditors();
      updateIframeContent();
    });
  });

  function initialize () {
    for (const project of context.projects) {
      for (const file of project.files) {
        file.userCode = file.content;
      }
    }
  }
  function isDark () {
    return $themes[$theme].type === 'dark';
  }
  function generateEditors () {
    theme.subscribe((value) => {
			window.monaco.editor.setTheme(isDark() ? 'vs-dark' : 'vs');
		});
    editor = window.monaco.editor.create(editorElement, {
      value: curFile().content,
      language: curFile().lang,
      theme: isDark() ? 'vs-dark' : 'vs',
      automaticLayout: true,
      minimap: {
        enabled: false
      },
      scrollBeyondLastLine: false,
      contextmenu: false
    });
    editor.onDidChangeModelContent(async (event) => {
      await frame();
      let file = curFile();
      const prop = `${file.name}-${curProjectIndex}-${curFileIndex}`;
      if (editor.getValue() === curFile().userCode) {
        fileChange = omit(fileChange, prop);
      } else {
        fileChange = { ...file, [prop]: editor.getValue() };
      }
    });
    editor.addAction({
      id: 'save',
      label: 'Save',
      keybindings: [
        monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S)
      ],
      precondition: null,
      keybindingContext: null,
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run: () => {
        let file = curFile();
        file.userCode = editor.getValue();
        fileChange = omit(fileChange, `${file.name}-${curProjectIndex}-${curFileIndex}`);
        updateIframeContent();
      }
    });
    editor.addAction({
      id: 'fullscreen',
      label: 'Fullscreen',
      keybindings: [
        monaco.KeyCode.F11
      ],
      precondition: null,
      keybindingContext: null,
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run: async () => {
        fullScreen = !fullScreen;
        await frame();
        editor.layout();
      }
    });
  }
  function updateIframeContent () {
    const template = context.projects[curProjectIndex].template;
    const files = context.projects[curProjectIndex].files;
    iframe.contentWindow.document.removeEventListener('keydown', handleKeydown);
    iframe = setIframeContent(iframe, templateWithContext(template, fileContext()));
    iframe.contentWindow.document.addEventListener('keydown', handleKeydown);
  }
  function handleFileClick (index) {
    if (context.projects.length > 1) {
      curProjectIndex = index;
    } else {
      curFileIndex = index;
    }
    const content = fileChange[`${curFile().name}-${curProjectIndex}-${curFileIndex}`] || curFile().userCode;
    editor.setValue(content);
    monaco.editor.setModelLanguage(editor.getModel(), curFile().lang);
    if (context['run-on-switch']) {
      updateIframeContent();
    }
  }
  let isResizing = false;
  function handleMouseDown () {
    isResizing = true;
  }
  function handleMouseMove (e) {
    if (isResizing) {
      const rect = rootElement.getBoundingClientRect();
      const left = e.clientX - rect.left;
      if (
        (left <= (rect.width - 150)) &&
        (left >= 150)
      ) {
        sliderElement.style.left = `${left - 4}px`;
        editorContainer.style.width = `${left}px`;
        editorElement.style.width = `${left}px`;
      }
    }
  }
  function handleMouseUp () {
    isResizing = false;
  }
  async function handleKeydown (e) {
    if (e.keyCode === 122 && fullScreen) {
      e.preventDefault();
      fullScreen = false;
      await frame();
      editor.layout();
    }
  }
</script>

<style lang="scss" scoped>
  :root {
    --madoc-vscode-grey-1: #252526;
    --madoc-vscode-grey-2: #2D2D2D;
    --madoc-vscode-grey-3: #1E1E1E;
  }
  :global(*[theme-type="light"]) {
    --madoc-vscode-background-color: var(--madoc-html-background-color);
    --madoc-vscode-navbar-color: var(--madoc-github-underline);
    --madoc-vscode-tab-background-color: var(--madoc-github-grey-4);
    --madoc-vscode-active-tab-background-color: var(--madoc-github-grey-9);
    --madoc-vscode-tab-color: var(--madoc-black-opacity-50);
    --madoc-vscode-tab-circle-color: var(--madoc-white-opacity-50);
    --madoc-vscode-border-color: var(--madoc-black-opacity-50);
  }
  :global(*[theme-type="dark"]) {
    --madoc-vscode-background-color: var(--madoc-vscode-grey-1);
    --madoc-vscode-navbar-color: var(--madoc-vscode-grey-1);
    --madoc-vscode-tab-background-color: var(--madoc-vscode-grey-2);
    --madoc-vscode-active-tab-background-color: var(--madoc-vscode-grey-3);
    --madoc-vscode-tab-color: var(--madoc-white-opacity-50);
    --madoc-vscode-tab-circle-color: var(--madoc-white-opacity-50);
    --madoc-vscode-border-color: var(--madoc-white-opacity-50);
  }
  div.repl-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
    padding: 16px;
    box-sizing: border-box;
    div.repl-container {
      position: relative;
      display: flex;
      flex-direction: row;
      overflow-y: hidden;
      height: 100%;
      background-color: var(--madoc-vscode-background-color);
      border: 1px solid var(--madoc-table-border-color);
      &.fullscreen {
        position: fixed !important;
        top: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 2 !important;
      }
      > div.dummy-catcher {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        &.active {
          display: block;
        }
      }
      > div.editor {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        > nav {
          background-color: var(--madoc-vscode-navbar-color);
          font-size: 13px;
          height: 35px;
          white-space: nowrap;
          > ul {
            display: flex;
            margin: 0;
            padding: 0;
            list-style: none;
            height: 100%;
            > li {
              cursor: pointer;
              display: flex;
              align-items: center;
              height: 100%;
              padding: 0 20px;
              background-color: var(--madoc-vscode-tab-background-color);
              color: var(--madoc-vscode-tab-color);
              &.active {
                background-color: var(--madoc-vscode-active-tab-background-color);
                color: var(--madoc-white);
              }
              > i {
                &.icon {
                  width: 16px;
                  height: 16px;
                  margin-right: 5px;
                  &.html {
                    background-image: url('/assets/icons/html.svg');
                  }
                  &.javascript {
                    background-image: url('/assets/icons/javascript.svg');
                  }
                  &.css {
                    background-image: url('/assets/icons/css.svg');
                  }
                }
                &.circle {
                  display: none;
                  width: 8px;
                  height: 8px;
                  margin-left: 5px;
                  border-radius: 50%;
                  background-color: var(--madoc-vscode-tab-circle-color);
                  &.active {
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
        > div.editor-container {
          flex-grow: 1;
        }
      }
      > div.slider {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        padding-left: 3px;
        padding-right: 4px;
        z-index: 1;
        cursor: e-resize;
        left: calc(50% - 4px);
        > div.border {
          height: 100%;
          width: 1px;
          background-color: var(--madoc-vscode-border-color);
        }
      }
      > div.iframe {
        height: 100%;
        flex-grow: 1;
      }
    }
  }
</style>

<svelte:window on:keydown={handleKeydown} on:mouseup={handleMouseUp} on:mousemove={(e) => {handleMouseMove(e)}}/>

<div class='repl-wrapper' style="height: {height}">
  <div bind:this={rootElement} class='repl-container' class:fullscreen={fullScreen} style="width: {width}">
    <div class='dummy-catcher' class:active={isResizing}></div>
    <div class='editor' bind:this={editorContainer}>
      <nav>
        <ul>
          {#each files() as file, index}
            <li class:active={curFile().name === file.name} on:click={() => {handleFileClick(index)}}><i class={`icon ${file.lang}`}></i><span>{file.name}</span><i class:active={hasChange(file.name)} class={'circle'}></i></li>
          {/each}
        </ul>
      </nav>
      <div class='editor-container' bind:this={editorElement}></div>
    </div>
    <div class='slider' bind:this={sliderElement} on:mousedown={handleMouseDown}>
      <div class='border'></div>
    </div>
    <div class='iframe' bind:this={iframeContainer}>
      <iframe src="javascript:void(0);" class='repl-view' title="REPL" bind:this={iframe} frameBorder="0" width="100%" height="100%"></iframe>
    </div>
  </div>
</div>
