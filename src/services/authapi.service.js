import axios from '@/middlewares/axios.middleware';
import {apiUrl, authApiUrl} from '@/config/app.config';
import Enums from '@/config/system.enums';

export default class AuthApi {
    static login(data){
        let obj = {}
        obj[Enums.HTTP_DATA] = JSON.stringify(data);
        return axios.post(apiUrl + authApiUrl + '/login', obj)
        .then(response => {
            localStorage.setItem('token', response.Token);
            delete response.Token;
            localStorage.setItem('user', JSON.stringify(response));
            return response;
        })
    }

    static register(data){
        let obj = {}
        obj[Enums.HTTP_DATA] = JSON.stringify(data);
        return axios.post(apiUrl + authApiUrl + '/register', obj)
        .then(response => {
            return response;
        })
    }
}