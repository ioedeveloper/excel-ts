"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var storage = multer_1.default.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path_1.default.extname(file.originalname));
    }
});
var upload = multer_1.default({
    storage: storage,
    limits: {
        fileSize: 5000000
    },
    fileFilter: function (req, file, callback) {
        var ext = path_1.default.extname(file.originalname);
        if (ext !== '.csv' && ext !== '.xlsx' && ext !== '.xls')
            return callback(new Error('Only excel sheets are allowed'), false);
    }
}).single('excel');
var excelHandler = function (req, res) {
    upload(req, res, function (err) {
        if (err)
            return res.status(200).send("Image Upload Failed!");
        return res.status(200).send("Excel uploaded successfully!");
    });
};
exports.excelHandler = excelHandler;
