import axios from 'axios';

export const api =  axios.create({
  // baseURL: "http://172.21.190.242:3001/api",
  baseURL: "https://ability-accounting-api.herokuapp.com/api",
  withCredentials: true,
});