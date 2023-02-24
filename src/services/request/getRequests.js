import { axiosInstance } from './../axiosInstance';


const apiKey = process.env.REACT_APP_API_KEY;
export const getFilmsRequest = async (searchTerm) => {
  return await axiosInstance("/", {
    params: {
      apiKey,
      s: searchTerm,
    },
  });
};
