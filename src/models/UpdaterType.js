export default class UpdaterType {
    constructor(){
        this.DeviceId = null;   //float64
        this.AppType = null;    //string
        this.Version = null;    //string
        this.Active = null;     //string
        this.CreateTime = null; //string
    }

    static from(json){
        return Object.assign(new UpdaterType(), json);
    }
}