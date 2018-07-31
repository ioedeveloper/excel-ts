import { Entity, ObjectIdColumn, Column, CreateDateColumn, ObjectID } from "typeorm";

@Entity("ExcelRecords")
class ExcelRecord {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    data: string[];
    
    @CreateDateColumn()
    date: Date = new Date;

}
export {ExcelRecord}
