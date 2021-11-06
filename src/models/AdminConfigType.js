export default class AdminConfigType {
    constructor(){
        this.CustomerId   = null; // float64
        this.Active   = null;
        this.CreateTime = null;
    }

    static from(json){
        Object.assign(new AdminConfigType(), json);
    }
}