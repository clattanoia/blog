/**
 * @description 网路配置
 **/

import { AxiosRequestConfig } from 'axios';

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: 'http://localhost:3030',
  responseType: 'json',
  timeout: 120 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
};
