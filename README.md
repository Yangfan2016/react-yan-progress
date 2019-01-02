## react-yan-progress 
[![NPM version](https://img.shields.io/npm/v/react-yan-progress.svg?style=flat)](https://www.npmjs.com/package/react-yan-progress)

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

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| total | 总数 | number | — | — |
| done | 已完成数 | number | — | — |
| modify | 已批改数 | number | — | — |
| tip | 自定义风格（数组包含3项，依次为：未完成、已提交、已批改的配置）|Array&lt;iTipConfig&gt;|—| — |

iTipConfig

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| text | 提示文字（‘X’为占位符） | string | 同css颜色类型 | — |
| fillStyle | 进度条的背景色 | string | 同css颜色类型 | — |


### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

---
built upon love by [docor](https://github.com/turingou/docor.git) v0.3.0
