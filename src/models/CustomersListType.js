export default class CustomerListType {
    constructor(){
        this.Customers = null;      // CustomerType
    }
    static from(json){
        return Object.assign(new CustomerListType(), json);
    }
  }