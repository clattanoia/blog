import { defer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import initializeAxios from './axiosSetup';
import { axiosRequestConfiguration } from './config';
import { ParamsObject } from '../interfaces';

const axiosInstance = initializeAxios(axiosRequestConfiguration);

const get = <T>(url: string, params?: ParamsObject): Observable<T> => {
  return defer(() => axiosInstance.get<T>(url, { params })).pipe(
    map((result) => result.data)
  );
};

const post = <T>(
  url: string,
  body: object,
  params?: ParamsObject
): Observable<T | void> => {
  return defer(() => axiosInstance.post<T>(url, body, { params })).pipe(
    map((result) => result.data)
  );
};

export { get, post };
