// Entry
module.exports = {
  // Tag to use the component: [${tag}](context)
  tag: 'Repl',
  // Called when reaching a markdown line with the component, should return metadata sent to the Svelte component
  parse: (line, fn) => {
    const match = /\(([^)]+)\)/.exec(line);
    const rootDir = fn.path.resolve(fn.filePath, match[1]);
    const metadata = fn.processMetadataFromFile(rootDir);
    for (const project of metadata.projects) {
      const filePath = fn.getDirName(rootDir);
      project.template = fn.getFileContent(fn.path.resolve(filePath, project.template));
      for (const file of project.files) {
        file.content = fn.getFileContent(fn.path.resolve(filePath, file.path));
      }
    }
    return metadata;
  },
  // Should be an asynchronous method that returns the Svelte component
  async getElement () {
    return await import('./Repl.svelte');
  },
  // Used to copy static content in the build
  copy (rootPath, distPath, fn) {
    fn.copy(fn.path.resolve(rootPath, './node_modules/monaco-editor/min'), fn.path.resolve(distPath, './assets/monaco-editor'));
    fn.copy(fn.path.resolve(__dirname, './assets'), fn.path.resolve(distPath, './assets'));
  },
  // Should return an array of html tags that has to be added in the head
  head: [
    '<script type="text/javascript" src="/assets/monaco-editor/vs/loader.js"></script>'
  ]
}
