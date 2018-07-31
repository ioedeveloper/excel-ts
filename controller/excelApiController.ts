import {Request, Response, NextFunction} from "express";
import multer from "multer";
import path from "path";

import {Excel} from "../services/excelService";

let filename:string;
let storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req:Request, file, callback) {
        filename = file.fieldname + '-' + Date.now()+path.extname(file.originalname);
        callback(null, filename);
    }
  });
let upload = multer({ 
    storage : storage,
    limits:{
        fileSize:5242880
    }
}).single('excel');

let excelHandler = (req:Request, res:Response) =>{
    upload(req, res, (err)=>{
        if(err) return res.status(200).send("Excel Upload Failed!");
        let excelService:Excel = new Excel("./uploads/"+filename);

        // extract data from excel
        excelService.extractData().then((data)=>{
            console.log("Data Extracted Successfully!");

            // save data from excel
            excelService.saveData(data).then((data)=>{
                console.log("Data saved successfully!");
                return res.status(200).send("Excel Upload Successful!");
            }).catch((error)=>{
                console.log(error);
                return res.status(200).send("Oops! An error occurred while saving data.");
            });

        }).catch((error)=>{
            console.log(error);
            return res.status(200).send("Oops! An error occured while extracting data.");
        });
    });
}
export {excelHandler};