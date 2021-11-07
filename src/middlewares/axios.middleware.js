import axios from 'axios';
import qs from 'qs';
import ResultType from '@/models/ResultType';
import Enums from '@/config/system.enums';

const instance = axios.create();

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.ContentType = 'application/x-www-form-urlencoded';
    config.data = qs.stringify(config.data);
    return config;
});

axios.interceptors.response.use(response => {
    if (response.data.Result == Enums.RESULT_OK){
        return ResultType.from(JSON.parse(response.data.Retval));
    }
}, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return Promise.reject(error);
});