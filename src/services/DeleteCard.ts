import axios from "axios";
import { config } from "./configAxios";

export const DeleteCard = async (id: string) => {
  const configAxios = config("delete", `cards/${id}`);

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
