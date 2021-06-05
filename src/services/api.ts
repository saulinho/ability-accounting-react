import axios from 'axios';

export const api =  axios.create({
  baseURL: "http://172.21.183.226:3001/api",
  withCredentials: true,
});