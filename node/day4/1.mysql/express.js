var sql = require("./sql.js");
console.log(sql);
sql.query("select * from students",[],function(data){
    console.log(data)
})
sql.query("select * from students",[],function(data){
    console.log(data)
})
sql.query("select * from students",[],function(data){
    console.log(data)
})