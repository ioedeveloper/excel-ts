import {Request, Response, NextFunction} from "express";

let excelHandler = (req:Request, res:Response) =>{
    if(req.body.excel != null){
        return res.status(200).send("Excel upload successfull!");
    }else{
        return res.status(200).send("No file uploaded!");
    }
};
export {excelHandler};