import axios from '@/middlewares/axios.middleware';
import {apiUrl, afatekApiUrl} from '@/config/app.config';
import Enums from '@/config/system.enums';

export default class AfatekApi {
    static getCustomers(){
        return axios.post(apiUrl + afatekApiUrl + '/getCustomers')
        .then(response => {
            return response;
        })
    }

    //static getCustomer

    static setCustomer(data){
        let obj = {}
        obj[Enums.HTTP_DATA] = JSON.stringify(data);
        return axios.post(apiUrl + afatekApiUrl + '/setCustomer', obj)
        .then(response => {
            return response;
        })
    }

    static getConfig(data){
        let obj = {}
        obj[Enums.HTTP_DATA] = JSON.stringify(data);
        return axios.post(apiUrl + afatekApiUrl + '/getConfig', obj)
        .then(response => {
            return response;
        })
    }

    static setConfig(data){
        let obj = {}
        obj[Enums.HTTP_DATA] = JSON.stringify({...data});
        return axios.post(apiUrl + afatekApiUrl + '/setConfig', obj)
        .then(response => {
            return response;
        })
    }

    static getDevices(deviceType){
        let httpClientHeaderType = {};
        httpClientHeaderType.DeviceType = deviceType;
        let obj = {}
        obj[Enums.HTTP_HEADER] = JSON.stringify({...httpClientHeaderType});
        return axios.post(apiUrl + afatekApiUrl + '/getDevices', obj)
        .then(response => {
            return response;
        })
    }

    static setDevice(data){
        return axios.post(apiUrl + afatekApiUrl + '/setDevice', data)
        .then(response => {
            return response;
        })
    }
}