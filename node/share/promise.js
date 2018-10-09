// var arr =[]
//var a =12
//var b =13
function show(){
    return new Promise(resolve=>{
       
        
        arr = [a,b]
        
    })
}

function get(arr){
    return new Promise(resolve=>{
       console.log(a)
    })
}

show().then(get)

new Promise(resolve=>{
    resolve(data)
})
.then(function(data){
    return new Promise(resolve=>{
        resolve()
    })
})
.then(function(data){
    return new Promise(resolve=>{
        resolve()
    })
})
.then(function(data){
    return new Promise(resolve=>{
        resolve()
    })
})