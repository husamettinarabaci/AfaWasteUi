export default class TagMainType {
    constructor(){
        this.TagId = null;      //float64
        this.CustomerId = null; //float64
        this.DeviceId = null;   //float64
        this.Epc = null;        //string
        this.Active = null;     //string
        this.CreateTime = null; //string
    }

    static from(json){
        return Object.assign(new TagMainType(), json);
    }
}