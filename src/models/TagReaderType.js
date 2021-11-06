export default class TagReaderType {
    constructor(){
        this.TagId = null;    //float64
        this.UID = null;      //string
        this.ReadTime = null; //string
        this.NewData = null;  //bool
    }

    static from(json){
        Object.assign(new TagReaderType(), json);
    }
}