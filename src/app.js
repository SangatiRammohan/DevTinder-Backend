const express = require("express")
// console.log(express)

const app = express()
// console.log(app)

// app.use("/", (req,res) =>{
//     res.send("Iam the new server")
//     console.log("Iam the new server")
// })
app.use("/home",(req,res) =>{
    res.send("iam from home server")
})

app.listen(3000, ()=>{
    console.log("server started at port 3000")
})
