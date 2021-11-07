export default class UltDeviceAlarmType {
    constructor(){
        this.DeviceId = null;    //float64
        this.AlarmStatus = null; //string
        this.AlarmTime = null;   //string
        this.AlarmType = null;   //string
        this.Alarm = null;       //string
        this.NewData = null;     //bool
    }

    static from(json){
        return Object.assign(new UltDeviceAlarmType(), json);
    }
}