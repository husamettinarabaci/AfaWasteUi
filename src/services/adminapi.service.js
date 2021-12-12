import axios from '@/middlewares/axios.middleware';
import {apiUrl, adminApiUrl} from '@/config/app.config';
import Enums from '@/config/system.enums';

export default class AdminApi {
    static getUsers(){
        return axios.post(apiUrl + adminApiUrl + '/getUsers')
        .then(response => {
            return response;
        })
    }

    static getTags(){
        return axios.post(apiUrl + adminApiUrl + '/getTags')
        .then(response => {
            return response;
        })
    }

    static getDevices(deviceType){
        let httpClientHeaderType = {};
        httpClientHeaderType.DeviceType = deviceType;
        let obj = {}
        obj[Enums.HTTP_HEADER] = JSON.stringify({...httpClientHeaderType});
        return axios.post(apiUrl + adminApiUrl + '/getDevices', obj)
        .then(response => {
            return response;
        })
    }



    static getConfig(dataType){
        let httpClientHeaderType = {};
        httpClientHeaderType.DataType = dataType;
        let obj = {}
        obj[Enums.HTTP_HEADER] = JSON.stringify({...httpClientHeaderType});
        return axios.post(apiUrl + adminApiUrl + '/getConfig', obj)
        .then(response => {
            return response;
        })
    }

    static setConfig(configType, data){
        let obj = {}
        obj[Enums.HTTP_HEADER] = JSON.stringify({DataType: configType});
        obj[Enums.HTTP_DATA] = JSON.stringify({...data});
        return axios.post(apiUrl + adminApiUrl + '/setConfig', obj)
        .then(response => {
            return response.Devices;
        })
    }
}