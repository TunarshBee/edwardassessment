import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL || "https://www.omdbapi.com"
export const axiosInstance = axios.create({baseURL:baseUrl})