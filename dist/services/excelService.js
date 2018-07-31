"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx = __importStar(require("ts-xlsx"));
const excelDataService_1 = require("./excelDataService");
const excelRecord_1 = require("../models/excelRecord");
class Excel {
    constructor(filePath) {
        this.filePath = filePath;
        this._readData = [];
        this._data = new excelDataService_1.ExcelDataService();
        this._excel = xlsx.readFile(filePath);
    }
    extractData() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index in this._excel.SheetNames) {
                let wrkshtname = this._excel.SheetNames[index];
                let wrksht = this._excel.Sheets[wrkshtname];
                for (let obj in wrksht) {
                    if (wrksht[obj]["v"] !== void 0) {
                        let objRead = wrksht[obj]["v"];
                        this._readData.push(objRead);
                    }
                }
            }
            return this._readData;
        });
    }
    saveData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let record = new excelRecord_1.ExcelRecord();
            record.data = data;
            console.log(record);
            yield this._data.saveData(record);
        });
    }
}
exports.Excel = Excel;
//# sourceMappingURL=excelService.js.map