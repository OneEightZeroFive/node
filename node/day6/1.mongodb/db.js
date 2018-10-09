const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = '1805';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	const db = client.db(dbName);
	//	select * from
	//	insert studnet
	
	//增加
//	db.collection('students').insertMany([{
//		a: 1
//	}, {
//		a: 2
//	}, {
//		a: 3
//	}, {
//		b: 4
//	}], function(err, result) {
//		console.log(result);
//	})
	
	//查
	db.collection('students').find({
		a:2
	}).toArray(function(err, docs) {
		assert.equal(err, null);
		console.log("Found the following records");
		console.log(docs)
	});

	//关闭数据库
	client.close();
});
console.log("开始使用mongodb");