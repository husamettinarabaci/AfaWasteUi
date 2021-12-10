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
}