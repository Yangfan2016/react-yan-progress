## react-yan-progress 
[![NPM version](https://img.shields.io/npm/v/react-yan-progress.svg?style=flat)](https://www.npmjs.com/package/react-yan-progress) 
[![Build Status](https://travis-ci.org/Yangfan2016/react-yan-progress.svg?branch=master)](https://travis-ci.org/Yangfan2016/react-yan-progress)
[![Coverage Status](https://coveralls.io/repos/github/Yangfan2016/react-yan-progress/badge.svg)](https://coveralls.io/github/Yangfan2016/react-yan-progress)


This is a cascading progress bar component based on react
![yan-progress](https://raw.githubusercontent.com/Yangfan2016/PicBed/master/Blog/yan-progress.gif)

### Installation
```bash
$ npm install react-yan-progress
```
### Qucik start
```js
import React from "react";
import ReactDOM from "react-dom";
import YanProgress from 'react-yan-progress';

function App() {
  return (
    <div className="App">
      <YanProgress total={100} done={60} modify={30} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### API

| params | description | type | default |
| :----: | :----: | :----: | :----: |
| total | The total of progress | number | — | 
| done | The number of done | number | — |
| modify | The number of modified base on done | number | — |
| tip | Custom Style (Array contains 3 items, in turn: uncomplete, done, and modified, each item configuration as shown in iTipConfig below)|iTipConfig|—|

iTipConfig

| params | description | type | memo |
| :----: | :----: | :----: | :----: | 
| text | The tooltip text ('X'is a placeholder) | string | The color type same with CSS |
| fillStyle | The background color of progress bar | string | The color type same with CSS |

### Test

```bash
$ yarn run test
```
### Dev

link react-yan-progress
```bash
$ yarn link
```

test test-demo
```bash
$ yarn link react-yan-progress
```

unlink react-yan-progress
```bash
$ yarn unlink
```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT license  
Copyright (c) 2018

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
built upon love by [docor](https://github.com/turingou/docor.git) v0.3.0
