/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/no-use-before-define */
//import { refreshToken } from '@/services/unicloud-ca-cms/AuthController';
//import jwtDecode from 'jwt-decode';
import type { RequestOptionsInit, ResponseError } from 'umi-request';
import Reqs, { extend } from 'umi-request';

// let requestOptions = null;

const errorHandler = async (error: ResponseError) => {
  if (Reqs.isCancel(error)) return;
  throw error;
};
export const request = extend({
  prefix: `${API_ENDPOINT}`,
  credentials: 'include',
  requestType: 'json',
  method: 'POST',
  responseType: 'json',
  getResponse: true,
  timeout: 20000,
  timeoutMessage: 'Server không phản hồi trong khoảng thời gian dài',
  errorHandler,
});

let token;
const requestInterceptor = (url: string, options: RequestOptionsInit) => {
  //   requestOptions = options;
  token = localStorage.getItem('token');
  const headers: any = {};
  headers.Authorization = `${token}`;

  return { url, options: { ...options, headers } };
};

const responseInterceptor = async (response: Response) => {
  const body = await response.clone().json();

  return { ...body };
};

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(responseInterceptor);
