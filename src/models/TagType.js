export default class TagType {
    constructor(){
        this.TagId = null;     //float64
        this.TagMain = null;   //TagMainType
        this.TagBase = null;   //TagBaseType
        this.TagStatu = null;  //TagStatuType
        this.TagGps = null;    //TagGpsType
        this.TagReader = null; //TagReaderType
    }

    static from(json){
        return Object.assign(new TagType(), json);
    }
}