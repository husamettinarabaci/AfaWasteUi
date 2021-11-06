export default class CustomerType {
    constructor(){
        this.CustomerId   = null;
        this.CustomerName = null;
        this.CustomerLink = null;
        this.RfIdApp      = null;
        this.UltApp       = null;
        this.RecyApp      = null;
        this.Active       = null;
        this.CreateTime   = null;
    }

    static from(json){
        Object.assign(new CustomerType(), json);
    }
}