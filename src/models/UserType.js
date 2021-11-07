export default class UserType {
    constructor(){
        this.UserId = null;     //float64
        this.CustomerId = null; //float64
        this.UserName = null;   //string
        this.UserRole = null;   //string
        this.Password = null;   //string
        this.Email = null;      //string
        this.Active = null;     //string
        this.CreateTime = null; //string
    }

    static from(json){
        return Object.assign(new UserType(), json);
    }
}