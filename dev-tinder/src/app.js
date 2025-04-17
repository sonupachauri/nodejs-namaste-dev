// create express js server

const express = require("express")

const app = express()
const port = 3000

app.listen(port, (err,req,res)=>{
    console.log(`port is running on port ${port}`)
})