var buypizza = new Promise(function (reslove, reject) {
    setTimeout(function () {
        console.log("出披萨")
        reslove()
    }, 3000)
})


var eatpizza = new Promise(function (reslove, reject) {
    setTimeout(function () {
        console.log("吃披萨")
        reslove()
    }, 3000)
})

var visitgf = new Promise(function (reslove, reject) {
        console.log("见女朋友")
})

buypizza().then(eatpizza).then(visitgf);