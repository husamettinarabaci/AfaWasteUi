export default class RecyDeviceBaseType {
    constructor(){
        this.DeviceId = null;    //float64
        this.ContainerNo = null; //string
        this.DeviceType = null;  //string
        this.NewData = null;     //bool
    }
    static from(json){
        return Object.assign(new RecyDeviceBaseType(), json);
    }
  }