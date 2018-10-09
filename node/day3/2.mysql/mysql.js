var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'laoyaoyao',
	password: '123456',
	database: '1805'
});

connection.connect(); //进行连接

connection.query('SELECT * FROM students', function(error, results, fields) {
	if(error) throw error;
	console.log(results);
});

connection.end();