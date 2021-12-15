import axios from 'axios';
import qs from 'qs';
import Enums from '@/config/system.enums';
import router from '@/router'

const instance = axios.create();

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    if (config.data){
      config.data = qs.stringify(config.data);
    }
    return config;
});

axios.interceptors.response.use(response => {
  switch(response.data.Result){
    case Enums.RESULT_OK:
      return JSON.parse(response.data.Retval);
    case Enums.RESULT_SUCCESS:
      return response.data.Retval;
    case Enums.RESULT_FAIL:
      //if (response.data.Retval === Enums.RESULT_ERROR_USER_AUTH){
      //  localStorage.removeItem('token');
      //  localStorage.removeItem('user');
      //  return router.push({name: 'auth-login'});
      //}
      return Promise.reject(response.data.Retval);
  }
}, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default axios;