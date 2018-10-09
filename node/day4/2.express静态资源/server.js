var express = require("express");
var app = express();
// 生成一个静态文件，服务器文件夹
app.use(express.static('www'));
var sql = require("./sql.js");
// 配置路由
// 拿来写入数据库
app.get("/getImg", function (req, res) {
    console.log(1);
    console.log(req.query);
    var arr = [{ url: "http://img.netbian.com/file/2017/0713/bb096e7fc133ddfbe1d409cf9340800b.jpg", name: "" }
        , { url: "http://img.netbian.com/file/2018/0827/362311ca0ad0beeb43e84c54118be7d1.jpg", name: "于思琪壁纸" }
        , { url: "http://img.netbian.com/file/2018/0925/422f00ddab5d1e945d4576857d79c9de.jpg", name: "长发白色内衣美女敏珺壁纸" }
        , { url: "http://img.netbian.com/file/2017/0607/065f5dfcbff6dfe9671775ce8e7807af.jpg", name: "4K/5K/8K超清壁纸" }
        , { url: "http://img.netbian.com/file/2018/0925/af076bacedb432b19909587fa3235bbf.jpg", name: "克拉女神江琴黑色毛衣美女壁纸" }
        , { url: "http://img.netbian.com/file/2018/0920/35dbcc7b2d2dc4c3db211f31369d69d6.jpg", name: "克拉女神敏珺壁纸" }
        , { url: "http://img.netbian.com/file/2018/0917/401c2b5952544e3c65fe57a09c836b8b.jpg", name: "克拉女神江琴 私人女神家教2k壁纸" }
        , { url: "http://img.netbian.com/file/2018/0719/99fe3115d635f333788e37793fa85af1.jpg", name: "江琴 居家沙发养眼美腿美女壁纸" }
        , { url: "http://img.netbian.com/file/2018/0705/2fac74e28dce18c9d9d838066cad4293.jpg", name: "小羽 居家养眼美女壁纸" }
        , { url: "http://img.netbian.com/file/2018/0917/4dcd7a868ee8372126eba246b1370e24.jpg", name: "江琴 私人女神家教高清壁纸" }
        , { url: "http://img.netbian.com/file/2018/0917/de81dfaf828df5393d878fb50cd62392.jpg", name: "克拉女神江琴 私人女神家教 苹果电脑 美女壁纸" }
        , { url: "http://img.netbian.com/file/2018/0913/912c61674239b842fbf852601b3293c1.jpg", name: "美女白色披肩 粉色毛衣 户外写真壁纸" }
        , { url: "http://img.netbian.com/file/2017/0825/b52c588ed577fbc62f8f229e1dcf02b8.jpg", name: "养眼美女妮子桌面壁纸" }
        , { url: "http://img.netbian.com/file/2018/0910/566e723f8e034d5f106564d9c8ccc18e.jpg", name: "美丽美女荷花壁纸" }
        , { url: "http://img.netbian.com/file/2018/0910/93a82732b77a31ca9195730c61b9f195.jpg", name: "荷花塘 长发肚兜美女闭眼 唯美壁纸" }
        , { url: "http://img.netbian.com/file/2018/0906/dc31c654c7ebd50179d93e37af68f0b1.jpg", name: "Beautyleg腿模Lucy壁纸" }
        , { url: "http://img.netbian.com/file/2018/0906/960fa7f70fd9493bae9f46f16b2dfeac.jpg", name: "美女腿模Lucy壁纸" }
        , { url: "http://img.netbian.com/file/2018/0902/d5cb1a917318ba6686def578cf32b89b.jpg", name: "于思琪 比基尼性感美女壁纸" }
        , { url: "http://img.netbian.com/file/2018/0904/b38e7e8c8ed3a0c0ee639729ebfa1db8.jpg", name: "克拉女神姜璐 森女 白色睡衣美女壁纸" }
        , { url: "http://img.netbian.com/file/2018/0702/d8297ec9ed06d1d8eb77f12251c11d38.jpg", name: "" }];
    arr.forEach(function (e, i) {
        sql.query('INSERT INTO beauty SET ?', [{
            url: e.url,
            name: e.name
        }], function (err, results) {
            console.log(results)
            res.send(results)
        })
    })
})
// 接受ajax请求提供数据库图片信息的

app.get("/getBeauty", function (req, res) {
    function getBeauty() {
        return new Promise(function (resolve, reject) {
            sql.query("SELECT * FROM `beauty`", [], function (results) {
                console.log(results);
                resolve(results)
            })

        })
    }
    // 把数据库的内容返回给前端
    function sendApi(data) {
        res.send(data)
    }

    getBeauty().then(sendApi)
})
app.listen(3000);
