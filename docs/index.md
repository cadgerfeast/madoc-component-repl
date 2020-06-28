---
title: Madoc - REPL Component
---
# Madoc - REPL Component

[Madoc] is a **MA**rkdown **DOC**umentation Framework.

It will help your generate a static documentation website.

This component adds coding capability inside the browser using [Monaco Editor] and **iframes**.

``` bash
# Install dependencies
npm install --save-dev @madoc/component-repl
```

Then add this in a **.madoc/components.js** file of your project.

``` javascript
module.exports = [
  require('@madoc/component-repl')
];
```

[Madoc]: https://madoc.cadgerfeast.dev/ "Madoc Website"
