export default class RfidDeviceType {
    constructor(){
        this.DeviceId = null;      //float64
        this.DeviceMain = null;    //RfidDeviceMainType
        this.DeviceBase = null;    //RfidDeviceBaseType
        this.DeviceStatu = null;   //RfidDeviceStatuType
        this.DeviceGps = null;     //RfidDeviceGpsType
        this.DeviceAlarm = null;   //RfidDeviceAlarmType
        this.DeviceTherm = null;   //RfidDeviceThermType
        this.DeviceVersion = null; //RfidDeviceVersionType
        this.DeviceDetail = null;  //RfidDeviceDetailType
    }
    static from(json){
        Object.assign(new RfidDeviceType(), json);
    }
  }