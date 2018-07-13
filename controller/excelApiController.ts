import {Request, Response, NextFunction} from "express";
import multer from "multer";
import path from "path";

let storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req:Request, file, callback) {
      callback(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
    }
  });
let upload = multer({ 
    storage : storage,
    limits:{
        fileSize:5000000
    },
    fileFilter: function (req, file, callback) {
        let ext:string = path.extname(file.originalname);
        if(ext !== '.csv' && ext !== '.xlsx' && ext !== '.xls') return callback(new Error('Only excel sheets are allowed'), false);
    }
}).single('excel');

let excelHandler = (req:Request, res:Response) =>{
    upload(req, res, (err)=>{
        if(err) return res.status(200).send("Image Upload Failed!");
        return res.status(200).send("Excel uploaded successfully!");
    });
}
export {excelHandler};