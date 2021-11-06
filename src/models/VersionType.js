export default class VersionType {
    constructor(){
        this.RfidGpsAppVersion = null;      //string
        this.RfidThermAppVersion = null;    //string
        this.RfidTransferAppVersion = null; //string
        this.RfidCheckerAppVersion = null;  //string
        this.RfidCamAppVersion = null;      //string
        this.RfidReaderAppVersion = null;   //string
        this.RfidSystemAppVersion = null;   //string
        this.UltFirmwareVersion = null;     //string
        this.RecyWebAppVersion = null;      //string
        this.RecyMotorAppVersion = null;    //string
        this.RecyThermAppVersion = null;    //string
        this.RecyTransferAppVersion = null; //string
        this.RecyCheckerAppVersion = null;  //string
        this.RecyCamAppVersion = null;      //string
        this.RecyReaderAppVersion = null;   //string
        this.RecySystemAppVersion = null;   //string
    }

    static from(json){
        Object.assign(new VersionType(), json);
    }
}