import { get, post } from './api';
import APIS from './constants';
import { QueryObject, ParamsObject } from '../interfaces';
import { fillPath } from '../utils/path';

// export const getProfile = (query: QueryObject, params: ParamsObject) =>
//   get<object>(fillPath(APIS.PROFILE, query), params);

export const getProfile = (query: QueryObject) =>
  get<object>(fillPath(APIS.PROFILE, query));
