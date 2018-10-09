function buypizza() {
    setTimeout(function () {
        console.log("出披萨")
        callback();
    }, 3000)
}

buypizza(function () {
    setTimeout(function () {
        console.log("吃披萨")

        function visitgf() {
            console.log("见女朋友")
        }
        visitgf()
    }, 1000)
})

console.log(1111)