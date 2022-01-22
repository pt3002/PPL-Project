const mongoose=require("mongoose");
const { Schema } = mongoose;

const LocationDetails = new Schema({
name:{
     required:true,
     type:String
},
title:{
    required:true,
    type:String
 },
description:{
    required:false,
    type:String
 },
besttimetotravel:{
    required:true,
    type:String
 },
 price:{
     required:true,
     type:String
 },
 rating:{
     required:true,
     type:String
 },

 image:{
    required:true,
     type:String
 } 

 });

module.exports=mongoose.model("LocationDetails",LocationDetails);