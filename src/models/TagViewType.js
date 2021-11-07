export default class TagViewType {
    constructor(){
        this.TagId = null;          //float64
        this.ContainerNo = null;    //string
        this.ContainerStatu = null; //string
        this.TagStatu = null;       //string
        this.Latitude = null;       //float64
        this.Longitude = null;      //float64
    }

    static from(json){
        return Object.assign(new TagViewType(), json);
    }
}