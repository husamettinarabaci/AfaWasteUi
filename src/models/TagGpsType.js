export default class TagGpsType {
    constructor(){
        this.TagId = null;     //float64
        this.Latitude = null;  //float64
        this.Longitude = null; //float64
        this.GpsTime = null;   //string
        this.NewData = null;   //bool
    }

    static from(json){
        return Object.assign(new TagGpsType(), json);
    }
}