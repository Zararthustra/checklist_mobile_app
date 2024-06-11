import { ILoginRequest, ILoginResponse } from "@interfaces/index";
import { createContext } from "react";

export const AuthContext = createContext<{
  signIn: (data: ILoginRequest) => Promise<void>;
  signOut: () => void;
  signUp: (data: ILoginRequest) => Promise<void>;
}>({
  signIn: () => Promise.resolve(),
  signOut: () => {},
  signUp: () => Promise.resolve(),
});
