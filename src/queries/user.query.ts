import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "./axios";
import { ILoginRequest, ILoginResponse } from "@interfaces/index";
import { setAS } from "@utils/asyncStorage";

// =====
// Axios
// =====

// LOGIN
export const login = async (payload: ILoginRequest) => {
  const { data } = await axiosInstance.post<ILoginResponse>(`/token/`, payload);
  return data;
};
// RECONNECT
export const reconnect = async (refreshToken: string) => {
  const { data } = await axiosInstance.post<ILoginResponse>(`/token/refresh/`, {
    refresh: refreshToken,
  });
  return data;
};
// REGISTER
export const register = async (payload: ILoginRequest) => {
  const { data } = await axiosInstance.post(`/register`, payload);
  return data;
};

// ==========
// ReactQuery
// ==========

// LOGIN
export const useMutationLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      console.log(response);
      setAS("accessToken", response.access);
      setAS("refreshToken", response.refresh);
      try {
        const token = jwtDecode<any>(response.access);
        setAS("name", token.username);
        setAS("userId", String(token.user_id));
      } catch (error) {
        console.log("JWT Error:", error);
      }
    },
    onError: (error: AxiosError) => {
      console.error("Error: ", JSON.stringify(error.config));
    },
  });
};

// RECONNECT
export const useMutationReconnect = () => {
  return useMutation({
    mutationFn: reconnect,
    onSuccess: (response) => {
      // setAccessToken(response.access);
      // setRefreshToken(response.refresh);
      // try {
      //   const token = jwtDecode<any>(response.access);
      //   setLS('name', token.username);
      //   setLS('userId', token.user_id);
      // } catch (error) {
      //   console.log('JWT Error:', error);
      // }
    },
    onError: () => {},
  });
};

// REGISTER
export const useMutationRegister = () => {
  return useMutation({
    mutationFn: register,
    onMutate: () => {},
    onSuccess: () => {},
    onError: (error: AxiosError) => {},
  });
};
