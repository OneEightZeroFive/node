var http = require("http");
//console.log(http);
var server = http.createServer(function(req,res){//request,response
	console.log(req.url);
	//解决跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	res.end("['a','b','c']");//echo xxx;响应体
});
server.listen(12345);//0~65535
