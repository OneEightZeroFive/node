var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

// 异步方法
//response 响应头
//body 响应体

function getHTML() {
    return new Promise(function (resolve, reject) {
        request('http://www.27270.com/ent/meinvtupian/', function (error, response, body) {
            //console.log('error:', error); // Print the error if one occurred
            //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            //console.log('body:', body); // Print the HTML for the Google homepage.
            resolve(body)
        });
        console.log("爬数据");
    })
}

function writeHTML(body){
    return new Promise(function(resolve,reject){
        fs.writeFile("./website/index.html", body, function (err, data) {
            resolve(body)
        })
        console.log("写数据")
    })
}

function analysis(body) {
    return new Promise(function (resolve, reject) {
        var $ = cheerio.load(body);
        // 数组
        var imgArr = [];
        $("img").each(function (index, ele) {
            //console.log(`第${index+1}张：${$(ele).attr("src")}`);
            imgArr.push($(ele).attr("src")); 
        })
        resolve(imgArr);
    })
}

function download(imgArr){
    return new Promise(function(reslove,reject){
        console.log(imgArr)
        imgArr.forEach(function(e,i){

            request(e).pipe(fs.createWriteStream(e))
        });
    })
}

getHTML().then(writeHTML).then(analysis).then(download);