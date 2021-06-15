import axios from 'axios';

const request = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 2000,
  withCredentials: false,
});
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    const res = response;
    return res;
  },
  (error) => {
    const { response, request } = error;
    let errMsg = { status: 0, data: null, config: {} };
    if (response) {
      const { status, data, config } = response;
      errMsg = { ...errMsg, status, data, config };
    } else {
      const { status } = request;
      errMsg = { ...errMsg, status };
    }

    return Promise.reject(errMsg);
  }
);



export default request
