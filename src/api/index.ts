import axios from 'axios';
import {config as basedConfig} from './config';

export const axiosInstance = axios.create({
  baseURL: `${basedConfig.apiBaseUrl}`,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async config => {
    config.headers = config.headers ?? {};
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
