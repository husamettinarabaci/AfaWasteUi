export default class RfidDeviceBaseType {
    constructor(){
        this.DeviceId = null;   //float64
        this.DeviceType = null; //string
        this.TruckType = null;  //string
        this.NewData = null;    //bool
    }

    static from(json){
        Object.assign(new RfidDeviceBaseType(), json);
    }
}
