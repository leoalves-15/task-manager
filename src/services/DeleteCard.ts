import axios from "axios";
import { config } from "./ConfigAxios";

export const DeleteCard = async (token: string, id?: string) => {
  const configAxios = config("delete", `cards/${id}`, token);

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
