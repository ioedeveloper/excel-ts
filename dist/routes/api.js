"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
var express_1 = require("express");
var excelApiController = __importStar(require("../controller/excelApiController"));
/**
 * Handles routing of leave api request
 */
var ExcelApi = /** @class */ (function () {
    function ExcelApi() {
        this.router = express_1.Router();
        this.init();
    }
    ExcelApi.prototype.init = function () {
        this.router.post("/upload", excelApiController.excelHandler);
    };
    return ExcelApi;
}());
var excelApiRoutes = new ExcelApi();
exports.excelApiRoutes = excelApiRoutes;
