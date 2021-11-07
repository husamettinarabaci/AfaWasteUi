export default class RfidDeviceStatuType {
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
        this.GpsAppStatus = null;          //string
        this.GpsAppLastOkTime = null;      //string
        this.GpsConnStatus = null;         //string
        this.GpsConnLastOkTime = null;     //string
        this.GpsStatus = null;             //string
        this.GpsLastOkTime = null;         //string
        this.ThermAppStatus = null;        //string
        this.ThermAppLastOkTime = null;    //string
        this.TransferAppStatus = null;     //string
        this.TransferAppLastOkTime = null; //string
        this.SystemAppStatus = null;       //string
        this.SystemAppLastOkTime = null;   //string
        this.UpdaterAppStatus = null;      //string
        this.UpdaterAppLastOkTime = null;  //string
        this.ContactStatus = null;         //string
        this.ContactLastOkTime = null;     //string
        this.NewData = null;               //bool
    }

    static from(json){
        return Object.assign(new RfidDeviceStatuType(), json);
    }
}
