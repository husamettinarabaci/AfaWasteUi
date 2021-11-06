export default class TagStatuType {
    constructor(){
        this.TagId = null;          //float64
        this.ContainerStatu = null; //string
        this.TagStatu = null;       //string
        this.ImageStatu = null;     //string
        this.CheckTime = null;      //string
        this.NewData = null;        //bool
    }

    static from(json){
        Object.assign(new TagStatuType(), json);
    }
}