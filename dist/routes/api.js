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
const express_1 = require("express");
const excelApiController = __importStar(require("../controller/excelApiController"));
/**
 * Handles routing of leave api request
 */
class ExcelApi {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.post("/upload", excelApiController.excelHandler);
        this.router.get("/upload", (req, res) => {
            return res.status(200).send("OK");
        });
    }
}
const excelApiRoutes = new ExcelApi();
exports.excelApiRoutes = excelApiRoutes;
//# sourceMappingURL=api.js.map