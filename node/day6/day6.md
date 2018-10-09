# mongodb

nosql数据库
```js
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
	db.collection('students').insertMany([{
		a: 1
	}, {
		a: 2
	}, {
		a: 3
	}, {
		b: 4
	}], function(err, result) {
		console.log(result);
	})
	//关闭数据库
	client.close();
});
console.log("开始使用mongodb");
```

# lodash

jquery
```js
$().xxx()
```

lodash
```js
_.xxx()
```
- [lodash中文官方网站](https://www.lodashjs.com/docs/4.17.5.html)

function add(num1,num2){
	return num1+num2
}
add(1,[1,2])



# 项目

express+mongodb+vue

