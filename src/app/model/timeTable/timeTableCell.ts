export class TimeTableCell{
    blocked!: boolean; 
    date! :Date;
    from!: number
    
    constructor(blocked: boolean, date :Date, from: number){
        this.blocked = blocked; 
        this.date = date; 
        this.from = from; 
    }
}