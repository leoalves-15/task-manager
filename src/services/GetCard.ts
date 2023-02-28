import axios from "axios";
import { config } from "./ConfigAxios";

export const GetCard = async (token: string) => {
  const configAxios = config("get", "cards", token);

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return window.alert(`${error}, consulte o admistrador do sistema`);
  }
};
