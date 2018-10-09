var express = require("express");

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = '1805';

var app = express();
app.get("/test",function(req,res){
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		//查
		db.collection("students").find({}).toArray(function(err, docs) {
			assert.equal(err, null);
			console.log("Found the following records");
			//callback(docs)
			res.send(docs);
		});
		//关闭数据库
		client.close();
	});
})
app.listen(9999)
