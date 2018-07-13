"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var excelHandler = function (req, res) {
    if (req.body.excel != null) {
        return res.status(200).send("Excel upload successfull!");
    }
    else {
        return res.status(200).send("No file uploaded!");
    }
};
exports.excelHandler = excelHandler;
