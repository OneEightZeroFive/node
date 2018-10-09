var fs = require("fs"); //node的内置模块 文件系统 对文件的增删查改

//console.log(fs);
var data = "";
fs.readFile("../../day1.md", {
	encoding: 'UTF-8'
}, function(e, d) { //err永远在前，data在后
	if(e) {
		throw err
	}
	console.log(d);
	data = d;
})

console.log(data)