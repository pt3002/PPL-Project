import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/PPL_backend",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("DB connected")
})
//PPL_backend is name of database

//Routes
app.post("/login",(req, res)=>{
    res.send("MY API login")
})

app.post("/signup",(req, res)=>{
    res.send("MY API signup")
})

app.listen(9002,()=>{
    console.log("BE started at port 9002")
})