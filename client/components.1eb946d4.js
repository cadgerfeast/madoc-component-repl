var e=[{tag:"Repl",parse:(e,t)=>{const o=/\(([^)]+)\)/.exec(e),s=t.path.resolve(t.filePath,o[1]),a=t.processMetadataFromFile(s);for(const e of a.projects){const o=t.getDirName(s);e.template=t.getFileContent(t.path.resolve(o,e.template));for(const s of e.files)s.content=t.getFileContent(t.path.resolve(o,s.path))}return a},getElement:async()=>await import("./Repl.53218a1c.js"),copy(e,t){t.copy(t.path.resolve(__dirname,"./node_modules/monaco-editor/min"),t.path.resolve(e,"./assets/monaco-editor")),t.copy(t.path.resolve(__dirname,"./assets"),t.path.resolve(e,"./assets"))},head:['<script type="text/javascript" src="/assets/monaco-editor/vs/loader.js"><\/script>']}];export default e;export{e as __moduleExports};
