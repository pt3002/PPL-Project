const multer=require("multer");
const {v1 : uuid} = require("uuid");
const Mimetypemap={
    "image/png":"png",
    "image/jpeg":"jpeg",
    "image/jpg":"jpg",
};

const fileupload =multer({
     limits:500000,
     storage:multer.diskStorage({
         destination:(req,file,cb)=>{
            cb(null,'upload/images');
         },
         filename:(req,file,cb)=>{
             const ext= Mimetypemap[file.mimetype];
             cb(null,uuid()+'.'+ext);
         }
     }),
     fileFilter:(req,file,cb)=>{
         const isvalid=!!Mimetypemap[file.mimetype];
         let error=isvalid?null:new Error("invalid mimtype");
         cb(error,isvalid);
     }




});



module.exports=fileupload;