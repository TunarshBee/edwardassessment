import axios from 'axios';
import { axiosInstance } from './../axiosInstance';


const apiKey = process.env.REACT_APP_APIKEY;
export const getFilmsRequests = async (searchTerm) => {
  return await axiosInstance("/", {
    params: {
      apikey: "fd4ef27a",
      s: searchTerm,
    },
  });
};
export const getFilmsRequest = async (searchTerm) => {
  return await axios.get(
    // `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
    `https://www.omdbapi.com/?s=spiderman&apikey=fd4ef27a`
  );
};