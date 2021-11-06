export default class RecyDeviceGpsType {
    constructor(){
        this.DeviceId = null;   //float64
        this.Latitude = null;   //float64
        this.Longitude = null;  //float64
        this.GpsTime = null;    //string
        this.NewData = null;    //bool
    }
    static from(json){
        Object.assign(new RecyDeviceGpsType(), json);
    }
  }