// import express from "express"
const express=require("express");
// import cors from "cors"
var cors = require('cors')
// import mongoose from "mongoose"
const mongoose=require("mongoose");
const locationdetails =require("./Schema/LocationDetails")
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
var fs = require('fs');
var path = require('path');

app.use("/upload/images",express.static(path.join("upload","images")))


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

//router for list of users
app.get('/userslist',(req,res)=>{
    User.find()
        .then(user=>res.json(user))
        .catch(err=>res.status(400).res.json(`Error:${err}`))
})

app.get('/places',(req,res)=>{
    locationdetails.find()
        .then(user=>res.json(user))
        .catch(err=>res.status(400).res.json(`Error:${err}`))
})
//router for list of places


const fileupload=require("./middleware/locationimage");
app.post("/addlocationdetails",fileupload.single("image"),async(req,res)=>{
    console.log("reach api");
     let success=false;
    try{
        let location=await locationdetails.create({
            name:req.body.name,
            title:req.body.title,
            description:req.body.description,
            besttimetotravel:req.body.besttimetotravel,
            price:req.body.price,
            rating:req.body.rating,
            image:req.file.path

        })
        success=true;
        return res.json({status:success,message:"Location has been added succesfully",urltoimage:req.file.path});

    }
    
      catch{
          return res.json({status:success,message:"Error while adding location"});
      }


})



app.listen(9002,()=>{
    console.log("BE started at port 9002")
})

