import axios from 'axios';
import {apiUrl, webApiUrl} from '@/config/app.config';
import HttpClientHeaderType from '@/models/HttpClientHeaderType';
import Enums from '@/config/system.enums';
var querystring = require('qs');

export default class WebApi {
    static getCustomer(){
        return axios.post(apiUrl + webApiUrl + '/getCustomer')
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }
    
    static getDevices(deviceType){
        let httpClientHeaderType = new HttpClientHeaderType();
        httpClientHeaderType.DeviceType = deviceType;
        let obj = {}
        obj[Enums.HTTP_HEADER] = JSON.stringify({...httpClientHeaderType});
        return axios.post(apiUrl + webApiUrl + '/getDevices', querystring.stringify(obj), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    static getTags(){
        
        return axios.post(apiUrl + webApiUrl + '/getTags')
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }
}