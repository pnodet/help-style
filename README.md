# help-style
> Small js package I use to help deal with css styling

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![GitHub workflow status](https://img.shields.io/github/workflow/status/pnxdxt/help-style/CI)](https://github.com/pnxdxt/help-style)
[![npm bundle size](https://img.shields.io/bundlephobia/min/help-style)](https://bundlephobia.com/package/help-style)
[![npm downloads](https://img.shields.io/npm/dt/help-style)](https://www.npmjs.com/package/help-style)

## Install
```
$ npm install help-style
```
## Import

This package is pure [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). It cannot be `require()`'d from CommonJS.

Use `import foo from 'foo'` instead of `const foo = require('foo')` to import the package.

```js
// Load entire build
import * as helpStyle from 'help-style';

// Load by method
import {hasClass} from 'help-style';
```
If the package is used in an async context, you could use [`await import(…)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) from CommonJS instead of `require(…)`.

**You also need to make sure you're on the latest minor version of Node.js. At minimum Node.js 12.20, 14.14, or 16.0.**

Read more here: [sindresorhus/esm-package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)


## Usage

```js

hasClass([1,2,3], (element) => typeof element === 'string');
//=> false

hasClass(['1', '2', '3'], (element) => typeof element === 'string');
//=> true
```

`hasClass` : Checks whether an element has a particular class\
`toggleClass` : Toggle a class for an element

`addClass` : Add a class for an element\
`addClassAll` : Add a class to all elements of a NodeList

`removeClass` : Remove a class for an element\
`removeClassAll` : Remove a class to all elements of a NodeList

`getStyle` : Get the value of a CSS rule for an element

`getCurrentMediaQuery` : Returns the current media query in use

`getMetaContentByName` : Returns a metatag content by name

## License

MIT © [Paul Nodet](https://pnodet.com)
