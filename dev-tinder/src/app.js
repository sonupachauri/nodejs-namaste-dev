// create express js server

const express = require("express")
const { userAuth, adminAuth } = require("./middlewares/auth")
const app = express()
const port = 3000

app.use('/admin',adminAuth)
app.get('/admin/getAllData',(req,res)=>{
    // check request is authorized
     res.send("All data sent");
})

app.get('/user', userAuth, (req,res)=>{
    // check request is authorized
     res.send("User data sent");
})


app.listen(port, (err,req,res)=>{
    console.log(`port is running on port ${port}`)
})