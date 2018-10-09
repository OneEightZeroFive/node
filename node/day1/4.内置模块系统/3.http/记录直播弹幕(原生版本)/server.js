var http = require("http");
//console.log(http);
var server = http.createServer(function(req,res){//request,response
	console.log(decodeURI(req.url));
	//解决跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	res.end("接受弹幕成功");//echo xxx;响应体
});
server.listen(12345);//0~65535