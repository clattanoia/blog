import { Observable } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { get, post } from './api';
import APIS from './constants';
import { Model } from '../interfaces';
import { fillPath } from '../utils/path';

// export const getProfile = (query: Model, params: ParamsObject) =>
//   get<object>(fillPath(APIS.PROFILE, query), params);

export const getProfile = (query: Model): Observable<Model> =>
  get<Model>(fillPath(APIS.PROFILE, query));
