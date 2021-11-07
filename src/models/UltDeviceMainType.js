export default class UltDeviceMainType {
    constructor(){
        this.DeviceId = null;     //float64
        this.CustomerId = null;   //float64
        this.SerialNumber = null; //string
        this.OldLatitude = null;  //float64
        this.OldLongitude = null; //float64
        this.Active = null;       //string
        this.CreateTime = null;   //string
    }

    static from(json){
        return Object.assign(new UltDeviceMainType(), json);
    }
}