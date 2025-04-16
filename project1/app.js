// console.log(global);
// console.log(this); // empty object
// import xyz from './xyz.js'
require("./xyz.js")
const data = require("./data.json");
console.log(data)
console.log(JSON.stringify(data))
console.log(globalThis=== global);