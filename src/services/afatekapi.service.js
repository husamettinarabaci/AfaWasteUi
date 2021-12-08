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
        return axios.post(apiUrl + afatekApiUrl + '/setCustomer', data)
        .then(response => {
            return response;
        })
    }
}