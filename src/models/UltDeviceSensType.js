export default class UltDeviceSensType {
    constructor(){
        this.DeviceId = null;  //float64
        this.UltTime = null;   //string
        this.UltRange = null;  //float64
        this.UltStatus = null; //string
        this.NewData = null;   //bool
    }

    static from(json){
        Object.assign(new UltDeviceSensType(), json);
    }
}