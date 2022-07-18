import { TimeTableRow } from "./timeTableRow";

export class TimeTable{

    dates!: string[]; 
    rows!: TimeTableRow[]; 

    constructor( dates: string[] , rows: TimeTableRow[] ){
        this.dates = dates; 
        this.rows = rows; 
    }
    
    
}