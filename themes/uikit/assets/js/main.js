import gdscript from 'highlightjs-gdscript/src/index.js';

docReady(() => {
  hljs.registerLanguage("gdscript", gdscript);
  hljs.highlightAll();
})
