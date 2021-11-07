export default class CustomerUltDevicesListType {
    constructor(){
        this.CustomerId = null;      // float64
        this.Devices = [];             // UltDeviceType
    }
    static from(json){
        return Object.assign(new CustomerUltDevicesListType(), json);
    }
  }