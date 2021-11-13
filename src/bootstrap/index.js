import Enums from '@/config/system.enums';
import WebApi from '@/services/webapi.service';
import store from '@/store';

WebApi.getCustomer().then(customer => {
    console.log('customer: ', customer)
    store.commit('panel/setCustomer', customer);
    if (customer.RfIdApp == Enums.STATU_ACTIVE){
        WebApi.getDevices(Enums.DEVICETYPE_RFID).then(response => {
            store.commit('panel/setRfidDevices', response.Devices);
        })
    }
    if (customer.UltApp == Enums.STATU_ACTIVE){
        WebApi.getDevices(Enums.DEVICETYPE_ULT).then(response => {
            store.commit('panel/setUltDevices', response.Devices);
        })
    }
    if (customer.RecyApp == Enums.STATU_ACTIVE){
        WebApi.getDevices(Enums.DEVICETYPE_RECY).then(response => {
            store.commit('panel/setRecyDevices', response.Devices);
        })
    }
}).catch(e => {
    console.log('error: ', e)
})


WebApi.getTags().then(response => {
    let tags = response.Tags;
    store.commit('panel/setTags', tags);
})

/*
console.log([Enums.DATATYPE_ADMINCONFIG, Enums.DATATYPE_LOCALCONFIG])
[Enums.DATATYPE_ADMINCONFIG, Enums.DATATYPE_LOCALCONFIG].forEach(configType => {
    WebApi.getConfig(configType).then(config => {
        console.log('config: ', config)
    })
})

*/
// getCustomer
// getConfig
// getDevice // rfid, ...
// getTags