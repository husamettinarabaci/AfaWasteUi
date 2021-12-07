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
}