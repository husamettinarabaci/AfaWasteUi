export default class UltDeviceType {
    constructor(){
        this.DeviceId = null;      //float64
	    this.DeviceMain = null;    //UltDeviceMainType
	    this.DeviceBase = null;    //UltDeviceBaseType
	    this.DeviceStatu = null;   //UltDeviceStatuType
	    this.DeviceBattery = null; //UltDeviceBatteryType
	    this.DeviceGps = null;     //UltDeviceGpsType
	    this.DeviceAlarm = null;   //UltDeviceAlarmType
	    this.DeviceTherm = null;   //UltDeviceThermType
	    this.DeviceVersion = null; //UltDeviceVersionType
	    this.DeviceSens = null;    //UltDeviceSensType
    }

    static from(json){
        Object.assign(new UltDeviceType(), json);
    }
}