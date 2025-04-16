const https = require("node:https");
const fs = require("node:fs");

console.log("Hello World")

var a = 344444;
var b = 8790

https.get("https://dummyjson.com/products/1", (res)=>{
console.log("fetched data successfully")
})


setTimeout(()=>{
   console.log("setTimeout called after 5 seconds!!")
},5000);

fs.readFile('./file.txt','utf8',(error,data)=>{
    console.log("fetched data", data)
})

function multiplyFun(a,b){
    const res= a*b;
    return res;
}
var c = multiplyFun(a,b)

console.log("Multiplication result:", c)