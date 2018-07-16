import * as xlsx from "ts-xlsx";
class Excel{
    public extractData(filePath:string){
        let wrkbk = xlsx.readFile(filePath);
        for(let names in wrkbk.SheetNames){
            console.log(wrkbk.SheetNames[names]);
        }
    }
}
export {Excel};