export default class CustomerConfigType {
  constructor(){
    this.CustomerId = null;      // float64
	this.SystemProblem = null;   // string
	this.TruckStopTrace = null;  // string
	this.Active = null;          // string
	this.CreateTime = null;      // string
  }
    static from(json){
        return Object.assign(new CustomerConfigType(), json);
    }
}