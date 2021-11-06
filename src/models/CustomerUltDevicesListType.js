export default class CustomerUltDevicesListType {
    constructor(){
        this.CustomerId = null;      // float64
        this.Devices = [];             // UltDeviceType
    }
    static from(json){
        Object.assign(new CustomerUltDevicesListType(), json);
    }
  }