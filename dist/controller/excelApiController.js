"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var excelHandler = function (req, res) {
    if (typeof req.files === "undefined") {
        res.status(400).send("File upload failed!");
    }
    else {
        res.status(200).send(req.files.excel);
    }
};
exports.excelHandler = excelHandler;
