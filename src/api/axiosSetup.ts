// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios';
import { defer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { axiosRequestConfiguration } from '@/config';
import { Model } from '../interfaces';

const initializeAxios = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);

  /*
        Add default headers, interceptors etc..
    */

  return axiosInstance;
};

const axiosInstance = initializeAxios(axiosRequestConfiguration);

const get = <T>(url: string, config?: AxiosRequestConfig): Observable<T> => {
  return defer(() => axiosInstance.get<T>(url, config)).pipe(
    map(result => result.data)
  );
};

const post = <T>(
  url: string,
  data: Model,
  config?: AxiosRequestConfig
): Observable<T | void> => {
  console.log('rx-post');
  return defer(() => axiosInstance.post<T>(url, data, config)).pipe(
    map(result => result.data)
  );
};

export { initializeAxios, get, post };
