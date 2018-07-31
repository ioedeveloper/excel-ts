"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const excelService_1 = require("../services/excelService");
let filename;
let storage = multer_1.default.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, callback) {
        filename = file.fieldname + '-' + Date.now() + path_1.default.extname(file.originalname);
        callback(null, filename);
    }
});
let upload = multer_1.default({
    storage: storage,
    limits: {
        fileSize: 5242880
    }
}).single('excel');
let excelHandler = (req, res) => {
    upload(req, res, (err) => {
        if (err)
            return res.status(200).send("Excel Upload Failed!");
        let excelService = new excelService_1.Excel("./uploads/" + filename);
        // extract data from excel
        excelService.extractData().then((data) => {
            console.log("Data Extracted Successfully!");
            // save data from excel
            excelService.saveData(data).then((data) => {
                console.log("Data saved successfully!");
                return res.status(200).send("Excel Upload Successful!");
            }).catch((error) => {
                console.log(error);
                return res.status(200).send("Oops! An error occurred while saving data.");
            });
        }).catch((error) => {
            console.log(error);
            return res.status(200).send("Oops! An error occured while extracting data.");
        });
    });
};
exports.excelHandler = excelHandler;
//# sourceMappingURL=excelApiController.js.map