import { Observable } from 'rxjs';
import { get, post } from './axiosSetup';
import APIS from './api';
import { Model } from '../interfaces';
import { fillPath } from '../utils/path';

export const getProfile = <T>(query: Model): Observable<T> =>
  get<T>(fillPath(APIS.GET_PROFILE, query));

export const addProfile = <T>(data: Model): Observable<T | void> =>
  post<T>(APIS.ADD_PROFILE, data);
