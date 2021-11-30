import axios from '@/middlewares/axios.middleware';
import {apiUrl, webApiUrl} from '@/config/app.config';
import Enums from '@/config/system.enums';
var querystring = require('qs');

export default class WebApi {
    static getCustomer(){
        return axios.post(apiUrl + webApiUrl + '/getCustomer')
            .then(response => {
                return response;
            })
    }
    
    static getDevices(deviceType){
        let httpClientHeaderType = {};
        httpClientHeaderType.DeviceType = deviceType;
        let obj = {}
        obj[Enums.HTTP_HEADER] = JSON.stringify({...httpClientHeaderType});
        return axios.post(apiUrl + webApiUrl + '/getDevices', obj)
            .then(response => {
                return response.Devices;
            })
    }

    static getTags(){
        return axios.post(apiUrl + webApiUrl + '/getTags')
        .then(response => {
            return response.Tags;
        })
    }

    static getTag(data){
        let obj = {}
        obj[Enums.HTTP_DATA] = JSON.stringify(data);
        return axios.post(apiUrl + webApiUrl + '/getTag', obj)
        .then(response => {
            return response;
        })
    }

    static getConfig(dataType){
        let httpClientHeaderType = new HttpClientHeaderType();
        httpClientHeaderType.DataType = dataType;
        let obj = {}
        obj[Enums.HTTP_HEADER] = JSON.stringify({...httpClientHeaderType});
        return axios.post(apiUrl + webApiUrl + '/getConfig', querystring.stringify(obj), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                return response;
            })
    }
}