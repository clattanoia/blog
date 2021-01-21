import { Observable } from 'rxjs';
import { get, post } from './axiosSetup';
import APIS from './api';
import { BaseObject } from '@/models';
import { fillPath } from '@/utils/path';

export const getProfile = <T>(query: BaseObject): Observable<T> =>
  get<T>(fillPath(APIS.GET_PROFILE, query));

export const addProfile = <T>(data: BaseObject): Observable<T | void> =>
  post<T>(APIS.ADD_PROFILE, data);
