"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var xlsx = __importStar(require("ts-xlsx"));
var Excel = /** @class */ (function () {
    function Excel() {
    }
    Excel.prototype.extractData = function (filePath) {
        var wrkbk = xlsx.readFile(filePath);
        for (var names in wrkbk.SheetNames) {
            console.log(wrkbk.SheetNames[names]);
        }
    };
    return Excel;
}());
exports.Excel = Excel;
