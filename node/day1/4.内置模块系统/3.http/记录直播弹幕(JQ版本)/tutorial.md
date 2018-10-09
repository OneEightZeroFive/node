# 第一步

先用jQuery获取主播的弹幕，注意是多条的

```js
$(".tt-msg-content-h5")
```

测试一条，获取第二条文本并且去除空格
```js
$(".tt-msg-content-h5").eq(1).text().trim()
```

# 第二步

```js
$.ajax({
	url:"http://localhost:12345",
	type:"GET",
	async:true,
	data:{
		kw:$(".tt-msg-content-h5").eq(1).text().trim()
	},
	success:function(data){
		console.log(data)
	}
})
```

# 第三步

需要用到node服务器，http模块，创建
```js
http.createServer(function(req,res){
	req.url//去寻找这个GET的参数
})
```

# 第四步

fs文件系统
```
fs.readFile("");
fs.writeFile("");
```


> node->vue->react-angular(1,2,4,5)->混合开发，微信小程序