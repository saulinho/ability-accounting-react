import axios from 'axios';

export const api =  axios.create({
  baseURL: "https://ability-accounting-api.herokuapp.com/api",
  withCredentials: true,
});