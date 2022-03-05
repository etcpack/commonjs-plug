<p align='center'>
    <a href='https://etcpack.github.io/api' target='_blank'>
        <img src='./logo.png'>
    </a>
</p>

# commonjs-plug
📦 用于兼容一些CommonJS规范导出的npm包

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@etcpack/commonjs-plug"><img src="https://img.shields.io/npm/dm/@etcpack/commonjs-plug.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@etcpack/commonjs-plug"><img src="https://img.shields.io/npm/v/@etcpack/commonjs-plug.svg" alt="Version"></a>
  <a href="https://github.com/etcpack/commonjs-plug/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@etcpack/commonjs-plug.svg" alt="License"></a>
  <a href="https://github.com/etcpack/commonjs-plug" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/etcpack/commonjs-plug?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/etcpack/commonjs-plug/issues)！

## How to use?

```
npm install --save-dev @etcpack/commonjs-plug
```

然后在```etcpack.config.js```的```plug```配置项中添加，例如：

```js
const CommonjsPlug = require('@etcpack/commonjs-plug');

plug: [new CommonjsPlug()]
```

开源协议
---------------------------------------
[MIT](https://github.com/etcpack/commonjs-plug/blob/master/LICENSE)

Copyright (c) 2021-2022 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
