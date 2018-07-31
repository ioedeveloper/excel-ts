import { getMongoManager} from "typeorm";

class ExcelDataService{
    private _db = getMongoManager();

    public async saveData(record:Object): Promise<string> {
        let response = await this._db.save(record).then((data)=>{
            return data;
        }).then((error)=>{
            return ("An error occured: "+error);
        });
        return response;
    }
}

export {ExcelDataService}