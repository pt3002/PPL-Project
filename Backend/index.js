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

//Schema creation(1)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//Model creation(2)
const User = new mongoose.model("User",userSchema)


//Routes
app.post("/login",(req, res)=>{
    const{ email, password } = req.body 
    User.findOne({ email:email },(err, user)=>{
        if(user){
            if(password === user.password ){
                res.send({message:"Logined !!",user:user})
            }
            else{
                res.send({message:"incorrect credentials"})
            }
        }
        else{
            res.send({message:"No such user"})
        }
    })
})

app.post("/signup",(req, res)=>{
    const{ name, email, password } = req.body
    User.findOne({email: email},(err,user)=>{
        if(user){
            res.send({message:"User aleady registered"})
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
            user.save( err=> {
                if(err){
                    res.send(err)
                }
                else{
                    res.send({ message:"Successfully Signed in, Please login!!"})
                }
            })
        }
    })
    
})

app.listen(9002,()=>{
    console.log("BE started at port 9002")
})

