import axios from 'axios';

const BE = 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL: BE
});

axiosInstance.interceptors.response.use(({ data }) => data);

export const request = axiosInstance;
