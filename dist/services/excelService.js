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
        for (var index in wrkbk.SheetNames) {
            var wrkshtname = wrkbk.SheetNames[index];
            var wrksht = wrkbk.Sheets[wrkshtname];
            for (var obj in wrksht) {
                //    if(wrksht[obj]["v"] !== void 0){
                //     console.log(wrksht[obj]["v"]);
                //    }
                console.log(wrksht[obj]);
            }
        }
    };
    return Excel;
}());
exports.Excel = Excel;
