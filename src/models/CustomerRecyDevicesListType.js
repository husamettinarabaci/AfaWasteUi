
export default class CustomerRecyDevicesListType {
    constructor(){
      this.CustomerId = null;      // float64
      this.Devices = null; // RecyDeviceType
    }
      static from(json){
          Object.assign(new CustomerRecyDevicesListType(), json);
      }
}