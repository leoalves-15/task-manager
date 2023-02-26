import axios from "axios";
import { config } from "./ConfigAxios";

export const GetCard = async () => {
  const configAxios = config("get", "cards");

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return window.alert(`${error}, consulte o admistrador do sistema`);
  }
};
