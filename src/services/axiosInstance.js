import axios from "axios";

const baseUrl = "http://www.omdbapi.com"
export const axiosInstance = axios.create(baseUrl)