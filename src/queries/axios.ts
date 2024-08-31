import axios, { AxiosInstance } from "axios";
import { getAS, setAS } from "@utils/asyncStorage";
import { ILoginResponse } from "src/interfaces";

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

// Response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config;

    // Check if the error is due to an expired token and if the request hasn't been retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark this request as a retry attempt

      try {
        const refreshToken = await getAS("refreshToken");
        if (!!!refreshToken) {
          // Handle missing refresh token (e.g., redirect to login)
          console.error("No refresh token found");
          return Promise.reject(error);
        }

        // Refresh tokens in AS
        const response = await axiosInstance.post<ILoginResponse>(
          `/token/refresh/`,
          {
            refresh: refreshToken,
          }
        );

        await setAS("accessToken", response.data.access);
        await setAS("refreshToken", response.data.refresh);

        originalRequest.headers.Authorization = `Bearer ${response.data.access}`;

        // Retry the original request with new tokens
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Refresh process failed\n", err);
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
