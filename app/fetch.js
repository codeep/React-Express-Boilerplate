import axios from 'axios'
import appConfig from '../config';

const requestUrl = `${appConfig.apiHost}`;
const requestPort = `${appConfig.apiPort}`;

let config = {
    baseURL: 'http://127.0.0.1:3001/api',
    transformRequest: [
      (data) => {
        let ret = '';
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret;
      }
    ],
    transformResponse: [
        (data) => {
            return data
        }
    ],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    timeout: 10000,
    responseType: 'json'
};

axios.interceptors.response.use((res) => {
    return res.data;
});

export const get = (url) => {
    return axios.get(url, config)
};

export const post = (url, data) => {
    return axios.post(url, data, config)
};

export const update = (url, data) => {
    return axios.put(url, data, config)
};
export const remove = (url, data) => {
    return axios.delete(url,  data, config)
};
