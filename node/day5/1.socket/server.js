var http = require("http");
var socketio = require("socket.io");
// 创建server服务器
var server = http.createServer(function(req,res){
    res.end("hello world")
})
// 创建socket服务器
var io = socketio(server);
server.listen(6789);
// 创建连接
io.on("connection",function(socket){
    // socket发送信息
    setInterval(function(){
        socket.emit("news","东京很热");
    },1000)
    socket.on("message",function(data){
        console.log(data)
    });
})
