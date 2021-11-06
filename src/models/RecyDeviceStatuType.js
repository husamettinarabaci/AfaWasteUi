export default class RecyDeviceStatuType {
    constructor(){
        this.DeviceId = null;              //float64
        this.StatusTime = null;            //string
        this.AliveStatus = null;           //string
        this.AliveLastOkTime = null;       //string
        this.ReaderAppStatus = null;       //string
        this.ReaderAppLastOkTime = null;   //string
        this.ReaderConnStatus = null;      //string
        this.ReaderConnLastOkTime = null;  //string
        this.ReaderStatus = null;          //string
        this.ReaderLastOkTime = null;      //string
        this.CamAppStatus = null;          //string
        this.CamAppLastOkTime = null;      //string
        this.CamConnStatus = null;         //string
        this.CamConnLastOkTime = null;     //string
        this.CamStatus = null;             //string
        this.CamLastOkTime = null;         //string
        this.ThermAppStatus = null;        //string
        this.ThermAppLastOkTime = null;    //string
        this.TransferAppStatus = null;     //string
        this.TransferAppLastOkTime = null; //string
        this.SystemAppStatus = null;       //string
        this.SystemAppLastOkTime = null;   //string
        this.UpdaterAppStatus = null;      //string
        this.UpdaterAppLastOkTime = null;  //string
        this.MotorAppStatus = null;        //string
        this.MotorAppLastOkTime = null;    //string
        this.MotorConnStatus = null;       //string
        this.MotorConnLastOkTime = null;   //string
        this.MotorStatus = null;           //string
        this.MotorLastOkTime = null;       //string
        this.WebAppStatus = null;          //string
        this.WebAppLastOkTime = null;      //string
        this.NewData = null;               //bool
    }
    static from(json){
        Object.assign(new RecyDeviceStatuType(), json);
    }
  }