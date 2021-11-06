export default class TagBaseType {
    constructor(){
        this.TagId = null;         //float64
        this.ContainerNo = null;   //string
        this.ContainerType = null; //string
        this.NewData = null;       //bool
    }

    static from(json){
        Object.assign(new TagBaseType(), json);
    }
}