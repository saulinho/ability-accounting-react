import axios from 'axios';

export const api =  axios.create({
  // baseURL: "http://172.31.227.82:3001/api",
  baseURL: "https://ability-accounting-back.herokuapp.com/api",
  withCredentials: true,
});