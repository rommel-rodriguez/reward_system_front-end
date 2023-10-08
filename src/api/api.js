import axios from 'axios';
import apiConfig from '../config/config';


console.log(`API URL is: ${apiConfig.apiUrl}`);

const api = axios.create({
  baseURL: apiConfig.apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const rawApi = axios.create({
  baseURL: apiConfig.apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

rawApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    // TODO: Handle responses here
    return response;
  },
  (error) => {
    // TODO: Handle errors here
    if (error.response.status === 401) {
      // For example, redirect to login if 401 Unauthorized
      // TODO: Change for proper routing, the /signin endpoint does not return
      // html, but JSON.
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default api;
export {rawApi};