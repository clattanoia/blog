import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { defer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { axiosRequestConfiguration } from '@/config';
import { BaseObject } from '@/models';

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
  data: BaseObject,
  config?: AxiosRequestConfig
): Observable<T | void> => {
  return defer(() => axiosInstance.post<T>(url, data, config)).pipe(
    map(result => result.data)
  );
};

export { initializeAxios, get, post };
