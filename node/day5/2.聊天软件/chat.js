var http = require("http");
var socketio = require("socket.io");
// 创建server服务器
var server = http.createServer(function(req,res){
    res.end("hello world")
})
// 创建socket服务器
var io = socketio(server);
server.listen(12345);
// 创建连接
io.on("connection",function(socket){
    console.log(socket.id);
    // socket发送信息
    setInterval(function(){
    },1000)
    socket.on("message",function(data){
        // 自发
        //socket.emit
        // 单发
        // io.sockets.sockets[socket.id].emit
        // 全发
        io.sockets.emit("remessage",data);
    });
})
