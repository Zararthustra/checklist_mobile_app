import { ILoginRequest, ILoginResponse } from "@interfaces/index";
import { createContext } from "react";

export const AuthContext = createContext<{
  signIn: (
    data: ILoginRequest
  ) => Promise<{ username: string; password: string } | string>;
  signOut: () => void;
  signUp: (
    data: ILoginRequest
  ) => Promise<{ username: string; password: string } | string>;
}>({
  signIn: () =>
    Promise.resolve({ username: "", password: "" }) || Promise.resolve("error"),
  signOut: () => {},
  signUp: () =>
    Promise.resolve({ username: "", password: "" }) || Promise.resolve("error"),
});
