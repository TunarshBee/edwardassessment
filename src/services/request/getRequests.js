
import { axiosInstance } from './../axiosInstance';
export const getFilmsRequest =  (searchTerm) => {
  return axiosInstance("/", {
    params: {
      apikey: "fd4ef27a",
      s: searchTerm,
    },
  });
};