export default class RecyDeviceAlarmType {
    constructor(){
        this.DeviceId = nul;    // float64
        this.AlarmStatus = nul; // string
        this.AlarmTime = nul;   // string
        this.AlarmType = nul;   // string
        this.Alarm = nul;       // string
        this.NewData = nul;     // bool
    }
    static from(json){
        Object.assign(new RecyDeviceAlarmType(), json);
    }
  }