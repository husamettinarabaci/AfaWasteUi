export default class RecyDeviceVersionType {
    constructor(){
        this.DeviceId = null;           //float64
        this.WebAppVersion = null;      //string
        this.MotorAppVersion = null;    //string
        this.ThermAppVersion = null;    //string
        this.TransferAppVersion = null; //string
        this.CheckerAppVersion = null;  //string
        this.CamAppVersion = null;      //string
        this.ReaderAppVersion = null;   //string
        this.SystemAppVersion = null;   //string
        this.NewData = null;            //bool
    }

    static from(json){
        Object.assign(new RecyDeviceVersionType(), json);
    }
}
