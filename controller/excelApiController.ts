import {Request, Response, NextFunction} from "express";

let excelHandler = (req:Request, res:Response) =>{
    if(typeof req.files === "undefined"){
        res.status(400).send("File upload failed!");
    }else{
        res.status(200).send(req.files.excel);
    }
};
export {excelHandler};