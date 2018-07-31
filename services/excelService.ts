import * as xlsx from "ts-xlsx";
import {ExcelDataService} from "./excelDataService";
import { ExcelRecord } from "../models/excelRecord";

class Excel {
    private _data: ExcelDataService;
    private _readData:Array<string> = [];
    private _excel: xlsx.IWorkBook;

    constructor(public filePath:string){
        this._data = new ExcelDataService();
        this._excel = xlsx.readFile(filePath);
    }

    public async extractData(): Promise<Array<string>> {
        for(let index in this._excel.SheetNames){
            let wrkshtname: string = this._excel.SheetNames[index];
            let wrksht: xlsx.IWorkSheet = this._excel.Sheets[wrkshtname];
            for(let obj in wrksht){
               if(wrksht[obj]["v"] !== void 0){
                    let objRead:string = wrksht[obj]["v"];
                    this._readData.push(objRead);
               }
            }
        }
        return this._readData;
    }

    public async saveData(data:Array<string>){
        let record = new ExcelRecord();
        record.data = data;
        console.log(record);
        await this._data.saveData(record);
    }
}
export {Excel}