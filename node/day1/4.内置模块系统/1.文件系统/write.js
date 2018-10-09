var fs = require("fs");
fs.writeFile("input.txt","hello wolrd",function(err,data){
	if(err){
		throw err
	}
	console.log(data);
})