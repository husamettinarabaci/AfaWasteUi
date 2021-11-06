export default class CustomerTagsListType {
    constructor(){
        this.CustomerId = null;      // float64
        this.Tags = [];             // TagType
    }
    static from(json){
        Object.assign(new CustomerTagsListType(), json);
    }
  }