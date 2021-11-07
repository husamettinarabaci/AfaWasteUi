export default class RfidDeviceVersionType {
    constructor(){
        this.DeviceId = null;           //float64
        this.GpsAppVersion = null;      //string
        this.ThermAppVersion = null;    //string
        this.TransferAppVersion = null; //string
        this.CheckerAppVersion = null;  //string
        this.CamAppVersion = null;      //string
        this.ReaderAppVersion = null;   //string
        this.SystemAppVersion = null;   //string
        this.NewData = null;            //bool
    }
    static from(json){
        return Object.assign(new RfidDeviceVersionType(), json);
    }
  }