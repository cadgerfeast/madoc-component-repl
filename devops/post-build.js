const fs = require('fs-extra');
const path = require('path');

fs.emptyDirSync(path.resolve(__dirname, '../assets/monaco-editor'));
fs.copySync(path.resolve(__dirname, '../node_modules/monaco-editor/min'), path.resolve(__dirname, '../assets/monaco-editor'));
