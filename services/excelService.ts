import * as xlsx from "ts-xlsx";
class Excel{
    public extractData(filePath:string){
        let wrkbk:xlsx.IWorkBook = xlsx.readFile(filePath);
        for(let index in wrkbk.SheetNames){
            let wrkshtname: string = wrkbk.SheetNames[index];
            let wrksht:xlsx.IWorkSheet = wrkbk.Sheets[wrkshtname];
            console.log(wrksht);
        }
    }
}
export {Excel};