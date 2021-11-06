export default class CustomerListType {
    constructor(){
        this.Customers = null;      // CustomerType
    }
    static from(json){
        Object.assign(new CustomerListType(), json);
    }
  }