"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var excelService_1 = require("../services/excelService");
var filename;
var storage = multer_1.default.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, callback) {
        filename = file.fieldname + '-' + Date.now() + path_1.default.extname(file.originalname);
        callback(null, filename);
    }
});
var upload = multer_1.default({
    storage: storage,
    limits: {
        fileSize: 5242880
    }
}).single('excel');
var excelHandler = function (req, res) {
    upload(req, res, function (err) {
        if (err)
            return res.status(200).send("Excel Upload Failed!");
        var excelService = new excelService_1.Excel();
        excelService.extractData("./uploads/" + filename);
        return res.status(200).send("Excel uploaded successfully!");
    });
};
exports.excelHandler = excelHandler;
