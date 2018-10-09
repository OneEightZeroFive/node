//document.querySelectorAll(".tt-msg-content-h5")[5].innerText
//获取直播间弹幕内容

//1.获取直播间弹幕内容
//2.前端通过ajax把弹幕内容发送到后端
//3.node.js http.createServer去接受前端发来的请求

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readyState == 4 && xhr.status == 200) {
		console.log(xhr.responseText)
	}
}
xhr.open("GET", "http://localhost:12345?dm=" + decodeURI(document.querySelectorAll(".tt-msg-content-h5")[5].innerText), true);
xhr.send();

//4.自动化

var length = 0;
setInterval(function() {
	//没有来新的信息
	if(length == document.querySelectorAll(".tt-msg-content-h5").length) {
		console.log("没有来新的信息")
	} else {
		console.log("来了新的信息")
		//来了新的信息
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				console.log(xhr.responseText)
			}
		}
		xhr.open("GET", "http://localhost:12345?dm=" + document.querySelectorAll(".tt-msg-content-h5")[document.querySelectorAll(".tt-msg-content-h5").length-1].innerText, true);
		xhr.send();
	}

	length = document.querySelectorAll(".tt-msg-content-h5").length
}, 1000)