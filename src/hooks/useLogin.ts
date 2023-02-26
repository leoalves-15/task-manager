import { useEffect, useState } from "react";
import { IUser } from "../model/User.types";
import { Login } from "../services";

export function useLogin(user: IUser) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const login = async () => {
      setToken(await Login(user));
    };
    login();
  }, [user]);

  return {
    token,
  };
}
