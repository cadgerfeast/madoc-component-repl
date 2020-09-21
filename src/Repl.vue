<template>
  <div class="madoc-repl" >
    <div ref="root" class="repl-wrapper" :style="computedStyle">
      <div class="repl-dummy-catcher" :class="{ 'active': isResizing }"></div>
      <div ref="editorContainer" class="repl-files-container">
        <nav>
          <ul>
            <li
              v-for="(file, index) in files" :key="index"
              :class="{ 'active': currentFile.name === file.name }"
              @click="handleFileClick(index)">
              <i :class="`icon ${file.lang}`"></i>
              <span>{{ file.name }}</span>
              <i class="circle" :class="{ 'active': hasChange(file.name) }"></i>
            </li>
          </ul>
        </nav>
        <div ref="editor" class="monaco-editor-container"></div>
      </div>
      <div ref="slider" class="slider" @mousedown="onSliderMouseDown"></div>
      <div class="repl-iframe-container">
        <iframe :key="rendered" ref="iframe" :srcdoc="currentIframeContent" title="REPL" frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
// TODO loading indicator before monaco
import { frame, omit, templateWithContext } from './utils';
export default {
  name: 'Repl',
  props: {
    context: {
      type: Object,
      default: () => { return {}; }
    }
  },
  data () {
    return {
      editor: null,
      isResizing: false,
      currentProjectIndex: 0,
      currentFileIndex: 0,
      fileChange: {},
      rendered: 0,
      currentIframeContent: 'javascript:void(0);'
    };
  },
  computed: {
    themeType () {
      return this.$store.getters.themeType;
    },
    height () {
      return this.context.height || '300px';
    },
    computedStyle () {
      return {
        'height': this.height
      };
    },
    files () {
      if (this.context.projects.length > 1) {
        const files = [];
        for (const project of this.context.projects) {
          files.push(project.files[0]);
        }
        return files;
      } else {
        return this.context.projects[0].files;
      }
    },
    currentFile () {
      return this.context.projects[this.currentProjectIndex].files[this.currentFileIndex];
    },
    fileTemplate () {
      return this.context.projects[this.currentProjectIndex].template;
    }
  },
  watch: {
    themeType () {
      window.monaco.editor.setTheme((this.themeType === 'light') ? 'vs' : 'vs-dark');
    }
  },
  methods: {
    hasChange (name) {
      return this.fileChange[`${name}-${this.currentProjectIndex}-${this.currentFileIndex}`];
    },
    initialize () {
      for (const project of this.context.projects) {
        for (const file of project.files) {
          file.userCode = file.content;
        }
      }
    },
    generateMonacoEditor () {
      // TODO fix css variables
      this.editor = window.monaco.editor.create(this.$refs.editor, {
        value: this.currentFile.content,
        language: this.currentFile.lang,
        theme: (this.themeType === 'light') ? 'vs' : 'vs-dark',
        automaticLayout: true,
        minimap: {
          enabled: false
        },
        scrollBeyondLastLine: false,
        contextmenu: false
      });
      this.editor.onDidChangeModelContent(async () => {
        await frame();
        const prop = `${this.currentFile.name}-${this.currentProjectIndex}-${this.currentFileIndex}`;
        if (this.editor.getValue() === this.currentFile.userCode) {
          this.fileChange = omit(this.fileChange, prop);
        } else {
          this.fileChange = { ...this.currentFile, [prop]: this.editor.getValue() };
        }
     });
     this.editor.addAction({
       id: 'save',
       label: 'Save',
       keybindings: [
         window.monaco.KeyMod.chord(window.monaco.KeyMod.CtrlCmd | window.monaco.KeyCode.KEY_S)
       ],
       precondition: null,
       keybindingContext: null,
       contextMenuGroupId: 'navigation',
       contextMenuOrder: 1.5,
       run: () => {
         this.currentFile.userCode = this.editor.getValue();
         this.fileChange = omit(this.fileChange, `${this.currentFile.name}-${this.currentProjectIndex}-${this.currentFileIndex}`);
         this.updateIframeContent();
       }
      });
    },
    getFileContext () {
      const result = {};
      for (const file of this.context.projects[this.currentProjectIndex].files) {
        result[file.tpl] = file.userCode;
      }
      return result;
    },
    updateIframeContent () {
      this.currentIframeContent = templateWithContext(this.fileTemplate, this.getFileContext());
      this.rendered++;
    },
    onSliderMouseDown () {
      this.isResizing = true;
      window.addEventListener('mousemove', this.onSliderMouseMove, false);
      window.addEventListener('mouseup', this.onSliderMouseUp, false);
    },
    onSliderMouseMove (e) {
      const rect = this.$refs.root.getBoundingClientRect();
      const left = e.clientX - rect.left;
      if (
        (left <= (rect.width - 150)) &&
        (left >= 150)
      ) {
        this.$refs.slider.style.left = `${left - 4}px`;
        this.$refs.editorContainer.style.width = `${left}px`;
        this.$refs.editor.style.width = `${left}px`;
      }
    },
    onSliderMouseUp () {
      this.isResizing = false;
      window.removeEventListener('mousemove', this.onSliderMouseMove, false);
      window.removeEventListener('mouseup', this.onSliderMouseUp, false);
    },
    handleFileClick (index) {
      if (this.context.projects.length > 1) {
        this.currentProjectIndex = index;
      } else {
        this.currentFileIndex = index;
      }
      const content = this.fileChange[`${this.currentFile.name}-${this.currentProjectIndex}-${this.currentFileIndex}`] || this.currentFile.userCode;
      this.editor.setValue(content);
      window.monaco.editor.setModelLanguage(this.editor.getModel(), this.currentFile.lang);
      if (this.context['run-on-switch']) {
        this.updateIframeContent();
      }
    }
  },
  // Lifecycle
  mounted () {
    window.amdRequire(['vs/editor/editor.main'], () => {
      this.initialize();
      this.generateMonacoEditor();
      this.updateIframeContent();
    });
  }
};
</script>

<style lang="scss">
@import '@/style/variables.scss';
div.madoc-repl {
  position: relative;
  > div.repl-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    > div.repl-dummy-catcher {
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
    > div.repl-files-container {
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
                display: inline-block;
                visibility: hidden;
                width: 8px;
                height: 8px;
                margin-left: 5px;
                border-radius: 50%;
                background-color: var(--madoc-vscode-tab-circle-color);
                &.active {
                  visibility: visible;
                }
              }
            }
          }
        }
      }
      > div.monaco-editor-container {
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
      background-color: var(--madoc-vscode-border-color);
      user-select: none;
    }
    > div.repl-iframe-container {
      flex-grow: 1;
      height: 100%;
    }
  }
}
</style>
