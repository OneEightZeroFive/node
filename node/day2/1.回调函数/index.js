function buypizza(callback){
    setTimeout(function(){
        console.log("出披萨")
        callback();
    },3000)
}

function eatpizza(){
    console.log("吃披萨")
}
// 买
buypizza(function(){
    console.log("吃披萨")
});
// 吃
eatpizza();

function getData(callback){
    fs.readFile("../../day1.md", function(e, d) { //err永远在前，data在后
        if(e) {
            throw err
        }
        callback(d);
        
    })
}
getData(function(d){
    console.log(d);
})

$.ajax({
    url:"",
    success(){

    }
}).done(function(){

})


function task1(callback){
    callback()
};

function task2(){

};

task1();
task2();