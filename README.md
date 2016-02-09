# [redux-storage-engine-localStorage][]

[![build](https://travis-ci.org/michaelcontento/redux-storage-engine-localStorage.svg)](https://travis-ci.org/michaelcontento/redux-storage-engine-localStorage)
[![dependencies](https://david-dm.org/michaelcontento/redux-storage-engine-localStorage.svg)](https://david-dm.org/michaelcontento/redux-storage-engine-localStorage)
[![devDependencies](https://david-dm.org/michaelcontento/redux-storage-engine-localStorage/dev-status.svg)](https://david-dm.org/michaelcontento/redux-storage-engine-localStorage#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-engine-localStorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localStorage)
[![npm version](https://img.shields.io/npm/v/redux-storage-engine-localStorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localStorage)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-engine-localStorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localStorage)
[![Code Climate](https://codeclimate.com/github/michaelcontento/redux-storage-engine-localStorage/badges/gpa.svg)](https://codeclimate.com/github/michaelcontento/redux-storage-engine-localStorage)

`window.localStorage` based engine for [redux-storage][].

## Installation

    npm install --save redux-storage-engine-localStorage

## Usage

Stores everything inside `window.localStorage`.

```js
import createEngine from 'redux-storage-engine-localStorage';
const engine = createEngine('my-save-key');
```

**Warning**: `localStorage` does not expose a async API and every save/load
operation will block the JS thread!

**Warning**: Some browsers like IE<=11 does not support Promises! If you don't
want to polyfill the whole Promise API, [redux-storage-engine-localStorageFakePromise][]
might be a possible solution for you.

## License

    The MIT License (MIT)

    Copyright (c) 2015 Michael Contento

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  [redux-storage]: https://github.com/michaelcontento/redux-storage
  [redux-storage-engine-localStorage]: https://github.com/michaelcontento/redux-storage-engine-localStorage
  [redux-storage-engine-localStorageFakePromise]: https://github.com/michaelcontento/redux-storage-engine-localStorageFakePromise
