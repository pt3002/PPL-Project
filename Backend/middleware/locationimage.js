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
             if(file===null){
                return cb(null,"nofile");
             }
             const ext= Mimetypemap[file.mimetype];
             cb(null,uuid()+'.'+ext);
         }
     }),
     fileFilter:(req,file,cb)=>{
         if(file===null){
            return cb(null,true);
         }
         const isvalid=!!Mimetypemap[file.mimetype];
         let error=isvalid?null:new Error("invalid mimtype");
         cb(error,isvalid);
     }




});



module.exports=fileupload;