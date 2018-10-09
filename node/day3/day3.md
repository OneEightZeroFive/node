# 爬音乐

- [爬虫](https://github.com/Wscats/node-tutorial/issues/2)

# mysql

安装mysql模块
```bash
npm i mysql
```

# 闭包

项目知识点  面试知识点
```js
//global 1
function country1(){ 2
	function city1(){ 3
	}
	function city2(){
	}
	return city1
}
var a = country1()

(function(){
	
})()
```

# express

|express|jq|bootstrap|
|-|-|-|
|框架|库|框架|
|后端|前端|前端|
|js|js|css|

（图纸，方位，风水，地质，大小，范围，层高，木结构MVC，MVVM）
框架（架构师）
>
（斧子，锤子，工具，钻）
库（前端工程师）（jQ封装了方法）

```bash
npm i express
```

路由：找资源文件的路径

```js
var express = require('express')
var app = express()
//路由
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/list', function (req, res) {
  res.send('进入index路由')
})
app.get('/detail', function (req, res) {
  res.send('进入home路由')
})
app.listen(3000)
```
处理get请求，获取参数只需要`req.query`
```js
app.get()
```
处理post请求,相对get请求会麻烦点，需要`body-parser`配合`req.body`
```js
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.post()
```

- [express配置](https://github.com/Wscats/node-tutorial/issues/8)

|php|nodejs(express)|
|-|-|
|$_GET["xxxx"]|req.query|
|$_POST["xxxx"]|req.body|
|header|req.append|
|echo|res.send|

