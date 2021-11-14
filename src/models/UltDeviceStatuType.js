export default class UltDeviceStatuType {
    constructor(){
        this.DeviceId = null;        //float64
        this.StatusTime = null;      //string
        this.AliveStatus = null;     //string
        this.AliveLastOkTime = null; //string
        this.UltStatus = null;       //string
        this.ContainerStatu = null;  //string
        this.NewData = null;         //bool
    
    }

    static from(json){
        return Object.assign(new UltDeviceStatuType(), json);
    }
}