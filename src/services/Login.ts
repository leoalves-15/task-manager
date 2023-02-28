import axios from "axios";
import { config } from "./ConfigAxios";
import { IUser } from "../model/User.types";

export const Login = async (user: IUser) => {
  const configAxios = config(
    "post",
    "login",
    '',
    {
      "Content-Type": "application/json",
    },
    {
      login: user.userName,
      senha: user.password,
    }
  );

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
