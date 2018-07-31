"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class ExcelDataService {
    constructor() {
        this._db = typeorm_1.getMongoManager();
    }
    saveData(record) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._db.save(record).then((data) => {
                return data;
            }).then((error) => {
                return ("An error occured: " + error);
            });
            return response;
        });
    }
}
exports.ExcelDataService = ExcelDataService;
//# sourceMappingURL=excelDataService.js.map