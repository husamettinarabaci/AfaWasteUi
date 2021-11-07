export default class AdminConfigType {
    constructor(){
        this.CustomerId   = null; // float64
        this.Active   = null;
        this.CreateTime = null;
    }

    static from(json){
        return Object.assign(new AdminConfigType(), json);
    }
}