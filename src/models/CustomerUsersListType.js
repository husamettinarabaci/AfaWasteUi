export default class CustomerUsersListType {
    constructor(){
        this.CustomerId = null;      // float64
        this.Users = [];             // UserTYpe
    }
    static from(json){
        return Object.assign(new CustomerUsersListType(), json);
    }
  }