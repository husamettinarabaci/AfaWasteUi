export default class RfidDeviceMainType {
    constructor(){
        this.DeviceId = null;     //float64
        this.CustomerId = null;   //float64
        this.SerialNumber = null; //string
        this.Active = null;       //string
        this.CreateTime = null;   //string
    }

    static from(json){
        return Object.assign(new RfidDeviceMainType(), json);
    }
}
