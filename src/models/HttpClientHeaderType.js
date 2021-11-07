export default class HttpClientHeaderType {
    constructor(){
        this.AppType = null;    //string
        this.DeviceNo = null;   //string
        this.DeviceId = null;   //float64
        this.CustomerId = null; //float64
        this.Time = null;       //string
        this.Repeat = null;     //string
        this.DeviceType = null; //string
        this.ReaderType = null; //string
        this.DataType = null;   //string
        this.Token = null;      //string
    }
    static from(json){
        return Object.assign(new HttpClientHeaderType(), json);
    }
  }