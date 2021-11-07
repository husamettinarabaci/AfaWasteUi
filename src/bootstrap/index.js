import Enums from '@/config/system.enums';
import WebApi from '@/services/webapi.service';

WebApi.getCustomer().then(customer => {
    console.log('customer: ', customer)
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