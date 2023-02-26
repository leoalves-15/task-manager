import React, { createContext } from "react";
import { ReactNode } from "react";
import { LoginContextType } from "./LoginContext.types";
import { useLogin } from "../../hooks/useLogin";

export const ContextLogin = createContext<LoginContextType>(
  {} as LoginContextType
);

export const LoginProvider = (props: { children: ReactNode }) => {
  const { token } = useLogin({ userName: "letscode", password: "lets@123" });

  return (
    <ContextLogin.Provider value={{ token }}>
      {props.children}
    </ContextLogin.Provider>
  );
};
