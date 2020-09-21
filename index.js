const path = require('path');
const fs = require('fs');

module.exports = {
  tag: 'Repl',
  rootPath: __dirname,
  entry: './dist/Repl.common.js',
  parse: (line, { filePath, fn }) => {
    const context = /\(([^)]+)\)/.exec(line)[1];
    const replPath = path.resolve(filePath, `../${context}`);
    const metadata = fn.processMarkdownMetadataByFile(replPath);
    for (const project of metadata.projects) {
      project.template = fs.readFileSync(path.resolve(replPath, `../${project.template}`), 'utf8');
      for (const file of project.files) {
        file.content = fs.readFileSync(path.resolve(replPath, `../${file.path}`), 'utf8');
      }
    }
    return metadata;
  },
  assets: [
    { src: 'assets' }
  ],
  head: [
    `
    <script type="text/javascript">
      var nodeRequire = window.require;
    </script>
    `,
    '<script type="text/javascript" src="/assets/monaco-editor/vs/loader.js"></script>',
    `
    <script type="text/javascript">
      window.amdRequire = window.require;
      window.require = nodeRequire;
    </script>
    `,
    '<script type="text/javascript">window.amdRequire.config({ paths: { "vs": "/assets/monaco-editor/vs" }});</script>'
  ]
};
