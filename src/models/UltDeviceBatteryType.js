export default class UltDeviceBatteryType {
    constructor(){
        this.DeviceId = null;      //float64
        this.Battery = null;       //string
        this.BatteryStatus = null; //string
        this.BatteryTime = null;   //string
        this.NewData = null;       //bool
    }

    static from(json){
        return Object.assign(new UltDeviceBatteryType(), json);
    }
}