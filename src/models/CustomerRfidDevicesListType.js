export default class CustomerRfidDevicesListType {
    constructor(){
      this.CustomerId = null;      // float64
      this.Devices = null; // RfidDeviceType
    }
      static from(json){
          Object.assign(new CustomerRfidDevicesListType(), json);
      }
  }