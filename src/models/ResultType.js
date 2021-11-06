export default class ResultType {
    constructor(){
        this.Result; // string (status code)
        this.Retval; // string (value)
    }

    static from(json){
        return Object.assign(new ResultType(), json);
    }
}