# node

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境

## 前端->谷歌浏览器  Chrome

在我们以前运行一段JS，一定要有浏览器，如果没有浏览器，JS是没办法执行的

以前JS的生效，影响力只能在浏览器层面


## 后端->NodeJS Chrome V8引擎（摆脱浏览器运行JS）

只要你在系统上安装了node环境，那你可以脱离浏览器去运行JS（不需要html,css文件），没有界面的浏览器

JS的活动范围在整个系统


<img src="1.node的简单使用/node与浏览器的关系.bmp" />


# 安装

从这个网站下载[node官网下载地址](https://nodejs.org/en/download/)

# 简单的使用

1. 新建一份JS文件

2. 打开该文件下的命令行，执行`node 文件的名字(.js)`

3. 在命令中查看效果


# 自定义模块系统


我们以前写前端程序，好几万，合作完成一起完成项目

## 前端模块

最简单
```html
<script src="m1" />
<script src="m2" />
```
require.js

模块一`n1.js`
```js
define()
```
模块二`n2.js`
```js
require(['n1'])
```

## 后端模块（node）

导出模块
```js
module.exports = (对象，函数，数组，字符串，数字)
```

导入模块

```js
require("相对路径/文件名字.js");
```


# 第三方模块

```js
require("gulp")
```

npm相当于应用商城，大量别人已经写好的模块

如果你需要用别人写好的模块，你可以从[npm官网](https://www.npmjs.com)下载对应的模块

```bash
npm install gulp -g
npm i gulp -g//等于上面的命令
npm install//全部安装 依赖于package.json文件
npm uninstall//全部卸载
npm uninstall xxx//卸载制定模块
```
如果npm安装不上第三方模块，我们可以尝试国内的淘宝镜像[cnpm](https://npm.tabbao.org)

```
cnpm install 模块
```
安装成功，会在你本地目录下生成**node_modules**文件夹

gulp是我们学的第一个node的第三方模块，别人写好的模块，你先用npm/cnpm命令下载，再新建JS文件引入该模块
再根据别人的模块文档，更改对应的代码实现自己的功能

# 内置模块系统

参考官方文档

- [nodejs官方内置模块系统的文档](nodejs.cn/api)

## fs

文件系统
```js
require("fs)
```

读文件
```js
fs.readFile("文件路径","选项（可选的）",回调函数)//回调函数第一个参数err,第二个参数是关于数据的data
```


写文件
```js
fs.writeFile("文件路径","要写入的文件内容",回调函数)
```

## os

操作系统
```js
require("os")
os.cpus()
```

## http

跟我们前端密切相关的模块，因为前端大量使用`http`和`https`

所以在node里面有两个与之对应的模块http和https模块

## 状态码

|status|描述|
|-|-|
|1xx|发送，准备|
|2xx|成功|
|3xx|缓存|
|4xx|浏览器端，客户端，前端问题|
|5xx|服务端，后端问题|

## 请求头，请求体，响应头，响应体

req->request请求的  前端-》后端

res->response响应的 后端-》前端


