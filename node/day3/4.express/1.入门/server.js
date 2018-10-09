var express = require('express')
var app = express()
//路由
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/list', function (req, res) {
  res.send('进入index路由')
})
app.get('/detail', function (req, res) {
  res.send('进入home路由')
})
app.listen(3000)