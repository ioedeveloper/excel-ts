import * as xlsx from "ts-xlsx";
class Excel{
    public extractData(filePath:string){
        let wrkbk:xlsx.IWorkBook = xlsx.readFile(filePath);
        for(let index in wrkbk.SheetNames){
            let wrkshtname: string = wrkbk.SheetNames[index];
            let wrksht:xlsx.IWorkSheet = wrkbk.Sheets[wrkshtname];
            for(let obj in wrksht){
               if(wrksht[obj]["v"] !== void 0){
                console.log(wrksht[obj]["v"]);
               }
            }
        }
    }
}
export {Excel};