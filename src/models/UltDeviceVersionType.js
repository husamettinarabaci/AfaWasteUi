export default class UltDeviceVersionType {
    constructor(){
        this.DeviceId = null;        //float64
        this.FirmwareVersion = null; //string
        this.NewData = null;         //bool
    }

    static from(json){
        Object.assign(new UltDeviceVersionType(), json);
    }
}