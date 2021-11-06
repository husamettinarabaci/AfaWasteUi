export default class RecyDeviceDetailType {
    constructor(){
        this.DeviceId = null;          //float64
        this.TotalGlassCount = null;   //float64
        this.TotalPlasticCount = null; //float64
        this.TotalMetalCount = null;   //float64
        this.DailyGlassCount = null;   //float64
        this.DailyPlasticCount = null; //float64
        this.DailyMetalCount = null;   //float64
        this.RecyTime = null;          //string
        this.NewData = null;           //bool
    }
    static from(json){
        Object.assign(new RecyDeviceDetailType(), json);
    }
  }