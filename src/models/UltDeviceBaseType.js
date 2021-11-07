export default class UltDeviceBaseType {
    constructor(){
        this.DeviceId = null;      //float64
        this.ContainerNo = null;   //string
        this.ContainerType = null; //string
        this.DeviceType = null;    //string
        this.Imei = null;          //string
        this.Imsi = null;          //string
        this.NewData = null;       //bool
    }

    static from(json){
        return Object.assign(new UltDeviceBaseType(), json);
    }
}