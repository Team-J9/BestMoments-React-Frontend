import axios from 'axios';
import instance from './config';
import refreshAxios from './refreshAxios';

const authAxios = axios.create({
  baseURL: instance.defaults.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

authAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
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
    const status = error.response ? error.response.status : null;

    if ((status === 401 || status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const response = await refreshAxios.patch(
            '/auth/refresh',
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            },
          );
          localStorage.setItem('accessToken', response.data);
          authAxios.defaults.headers['Authorization'] = `Bearer ${response.data}`;
          originalRequest.headers['Authorization'] = `Bearer ${response.data}`;
          return authAxios(originalRequest);
        } catch (error) {
          alert('세션이 만료되었습니다. 다시 로그인해주세요.');
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/';
        }
      } else {
        alert('세션이 만료되었습니다. 다시 로그인해주세요.');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  },
);

export default authAxios;
