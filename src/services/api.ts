import axios from 'axios';

export const api =  axios.create({
  baseURL: "http://172.31.235.101:3001/api",
  // baseURL: "https://ability-accounting-api.herokuapp.com/api",
  withCredentials: true,
});