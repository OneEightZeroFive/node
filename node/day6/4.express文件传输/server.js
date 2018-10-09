var express = require("express");
var app = express();
app.listen(3000);
//引入multer
var multer = require('multer');
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		//第二个参数为存文件的地方,把文件存到uploads文件夹下
		cb(null, './uploads')
	},
	filename: function(req, file, cb) {
		//防止重名
		var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
})

var upload = multer({
	storage: storage
});

app.post("/upload-single", upload.single('suibianxie'), function(req, res) {
	res.send("success")
})