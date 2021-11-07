export default class CustomerRfidDevicesListType {
    constructor(){
      this.CustomerId = null;      // float64
      this.Devices = null; // RfidDeviceType
    }
      static from(json){
          return Object.assign(new CustomerRfidDevicesListType(), json);
      }
  }