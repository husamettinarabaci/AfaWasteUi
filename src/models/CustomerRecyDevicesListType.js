
export default class CustomerRecyDevicesListType {
    constructor(){
      this.CustomerId = null;      // float64
      this.Devices = null; // RecyDeviceType
    }
      static from(json){
        return Object.assign(new CustomerRecyDevicesListType(), json);
      }
}