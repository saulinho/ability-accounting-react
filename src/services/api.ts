import axios from 'axios';

export const api =  axios.create({
  // baseURL: "http://172.31.227.82:3001/api",
  baseURL: "http://52.224.241.219/api",
  withCredentials: true,
});
