export default class RfidDeviceDetailType {
    constructor(){
        this.DeviceId = null;      //float64
        this.PlateNo = null;       //string
        this.DriverName = null;    //string
        this.DriverSurName = null; //string
        this.NewData = null;       //bool
    }

    static from(json){
        Object.assign(new RfidDeviceDetailType(), json);
    }
}
