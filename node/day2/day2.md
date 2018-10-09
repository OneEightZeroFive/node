# 回调函数

异步有意义要有回调

（任务需要花一定时间才能完成）-》异步
（任务立即完成了）-》同步

如果你遇到一些需要花时间的任务（比如买一个需要等待30分钟的披萨），此时要借助于回调函数完成（要留电话），不然这个任务没意义（也就是我拿不到披萨）

但是有回调不代表异步（留了电话，不代表这个任务是立即完成还是需要花时间）

同步-》阻塞，花时间等

异步-》非阻塞，不需要等待时间

# Promise

如果出现大量的回调嵌套，（回调地狱，回调金字塔），建议使用`Promise`，方便维护

# 事件循环

依赖内置的`events`模块，是一个内置模块，它不需要下载的，node自带的

```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

eventEmitter它提供两个方法一个是`on`，另一个是`emit`,on是监听，emit是触发

监听
```js
eventEmitter.on('buypizza', function(){
    console.log("买披萨")
});
```
触发
```js
eventEmitter.emit('buypizza');
```

观察者模式

# request

是基于fs内置模块封装的一个第三方模块

```js
npm i request
```

爬数据
```js
var request = require('request');
//response 响应头
//body 响应体
request('http://www.27270.com/ent/meinvtupian/', function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});
```

|error|response|body|
|-|-|-|
|判断是否错误|响应头（状态码，服务器的信息）|响应体（网站源代码）|

我们可以利用body来去挖掘网站的数据

下载对应的资源文件

```js
request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))
```

# cheerio

它就是相当于jQuery,因为node服务端已经获取到网页源代码，所以我们需要在后端用jQuery的方法把它分析出有用的信息

```js
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')
 
$('h2.title').text('Hello there!')
$('h2').addClass('welcome')
```

1. 先加载cheerio模块
2. 然后`cheerio.load(放一段html结构)`，并赋给`$`符号
3. 再通过`$`符号，用类似jQ的方法来操作该DOM结构

# github

github,gitlab,gitee>git

|git|github,gitlab,gitee|
|-|-|
|代码管理工具|是利用git这个技术实现的代码平台|
|||

只安装git，用处不大的，所以你要配合`github,gitlab,gitee`

[Git常用命令笔记](https://blog.csdn.net/qq_27080247/article/details/49942991)

```bash

```