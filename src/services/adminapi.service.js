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
}