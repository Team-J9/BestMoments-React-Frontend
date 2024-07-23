import axios from 'axios';
import instance from './config';
import { getItem, removeItem, setItem } from '../../utils/localStorageUtil';

const authAxios = axios.create({
  baseURL: instance.defaults.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

authAxios.interceptors.request.use(
  (config) => {
    const accessToken = getItem('accessToken');
    const refreshToken = getItem('refreshToken');

    if (!accessToken || !refreshToken) {
      removeItem('accessToken');
      removeItem('refreshToken');
      return Promise.reject(new Error('세션이 만료되었습니다. 다시 로그인해주세요.'));
    }

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (!error.response) {
      return Promise.reject(error);
    }

    const status = error.response.status;

    if ((status === 401 || status === 403) && !originalRequest._retry) {
      const refreshToken = getItem('refreshToken');

      if (refreshToken) {
        originalRequest._retry = true;
        try {
          const response = await instance.patch(`/auth/refresh/${refreshToken}`);
          setItem('accessToken', response.data);
          authAxios.defaults.headers['Authorization'] = `Bearer ${response.data}`;
          originalRequest.headers['Authorization'] = `Bearer ${response.data}`;
          return authAxios(originalRequest);
        } catch (error) {
          removeItem('accessToken');
          removeItem('refreshToken');
          alert('세션이 만료되었습니다. 다시 로그인해주세요.');
          window.location.href = '/';
        }
      } else {
        removeItem('accessToken');
        removeItem('refreshToken');
        alert('세션이 만료되었습니다. 다시 로그인해주세요.');
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  },
);

export default authAxios;
