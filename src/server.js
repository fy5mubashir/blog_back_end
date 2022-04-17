const express = require("express")
const bodyparser=require("body-parser")
const app = express();
app.use(bodyparser.json())
app.get("/123",(req , res) =>res.send("Mubashir First Server Get FROM  On react"))
app.post("/1223",(req,res)=>res.send(`Mubashir First POST ON Server On react ${req.body.name}`) )
// res.send("Mubashir First Server On react")
app.listen(3003,()=> console.log("Listening On Port"));