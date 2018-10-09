// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 绑定事件及事件的处理程序
eventEmitter.on('buypizza', function(){
    setTimeout(function(){
        console.log("买披萨")
        eventEmitter.emit('eatpizza');
    },3000)
});

eventEmitter.on('eatpizza', function(){
    setTimeout(function(){
        console.log("吃披萨")
        eventEmitter.emit('visitgf');
    },3000)
});

eventEmitter.on('visitgf', function(){
    console.log("见女朋友")
});

// 触发事件
eventEmitter.emit('buypizza');