export default class RecyDeviceType {
    constructor(){
        this.DeviceId = null;      //float64
        this.DeviceMain = null;    //RecyDeviceMainType
        this.DeviceBase = null;    //RecyDeviceBaseType
        this.DeviceGps = null;     //RecyDeviceGpsType
        this.DeviceTherm = null;   //RecyDeviceThermType
        this.DeviceVersion = null; //RecyDeviceVersionType
        this.DeviceAlarm = null;   //RecyDeviceAlarmType
        this.DeviceStatu = null;   //RecyDeviceStatuType
        this.DeviceDetail = null;  //RecyDeviceDetailType
    }

    static from(json){
        return Object.assign(new RecyDeviceType(), json);
    }
}
