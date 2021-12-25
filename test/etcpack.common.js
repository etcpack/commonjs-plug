const CommonjsPlug = require('../src/index');

module.exports = {

    // 打包入口
    entry: './src/main.js',

    // 打包出口
    output: 'build/main.js',

    // 插件
    plug: [new CommonjsPlug()]

};
