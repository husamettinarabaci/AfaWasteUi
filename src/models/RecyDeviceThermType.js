export default class RecyDeviceThermType {
    constructor(){
        this.DeviceId = null;    //float64
        this.Therm = null;       //string
        this.ThermTime = null;   //string
        this.ThermStatus = null; //string
        this.NewData = null;     //bool
    }

    static from(json){
        return Object.assign(new RecyDeviceThermType(), json);
    }
}
