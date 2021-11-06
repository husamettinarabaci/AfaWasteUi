export default class RfidDeviceAlarmType {
    constructor(){
        this.DeviceId = null;    //float64
        this.AlarmStatus = null; //string
        this.AlarmTime = null;   //string
        this.AlarmType = null;   //string
        this.Alarm = null;       //string
        this.NewData = null;     //bool
    }

    static from(json){
        Object.assign(new RfidDeviceAlarmType(), json);
    }
}
