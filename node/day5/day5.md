# express

静态文件夹

post请求

# socket

ajax,一定要前端发请求，后端只是接受方
> 前端 ajax(主动方)->server后端（被动方）->前端

socket
弊端：占用资源多
优点：不受跨域影响，是可以保持前后端联系
> 后端 ->前端 也可以 前端发后端

安装socket.io模块
```bash
npm install socket.io
```
后端代码
```js
var http = require("http");
var socketio = require("socket.io");
// 创建server服务器
var server = http.createServer(function(req,res){
    res.end("hello world")
})
// 创建socket服务器
socketio(server);
server.listen(6789);
// 创建连接
socketio.on("connection",function(socket){
    // socket发送信息
    socket.emit("")
})
```
```js
socket.emit("")//后端发送前端
socket.on("",callback)//前端发送后端
```

前端代码
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="js/socket.js"></script>
    <script>
        //引入完socket.js之后，会有一个全局的io变量
        // 指向后端的socket服务器
        var socket = io("http://localhost:6789");
        // 前后端socket都具有两个方法
        socket.emit("message","你好");
        socket.on("news",function(data){
            console.log(data)
        })
    </script>
</body>
</html>
```

操作服务器系统入站规则，出站规则

# mongodb

安装mongodbxxxx.exe安装包,去安装的位置找bin文件夹

- [mongodb教程](https://github.com/Wscats/node-tutorial/issues/20)

```
C:\Program Files\MongoDB\Server\3.2\bin
```

寻找`mongod.exe`命令,用CMD命令行来运行以下命令,创建数据库,不要关闭该命令行，它会将数据库接口以27017来暴露给我们访问

```js
mongod --dbpath 路径
```

打开bin文件夹下的`mongo.exe`命令行

```
mongo.exe
```

打开3T就可以进行数据库管理
