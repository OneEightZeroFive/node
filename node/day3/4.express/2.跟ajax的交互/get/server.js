var express = require('express')
var app = express()
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'laoyaoyao',
	password: '123456',
	database: '1805'
});

//路由
app.get('/list', function(req, res) {
	connection.connect(); //进行连接
	//跨域
	res.append("Access-Control-Allow-Origin", "*");
	console.log(req.query);
	connection.query('SELECT * FROM song', function(error, results, fields) {
		if(error) throw error;
		console.log(results);
		res.send(JSON.stringify({
			results: results
		}));
	});
	connection.end();
})
app.listen(3000)