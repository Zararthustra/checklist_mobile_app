import axios, { AxiosInstance } from "axios";
import { getAS } from "@utils/asyncStorage";
// import { API_URL } from "@env";

export const baseURL = process.env.EXPO_PUBLIC_API_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const token = await getAS("accessToken");
    if (!!token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
