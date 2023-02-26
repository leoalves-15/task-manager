import axios from "axios";
import { config } from "./configAxios";

export const UpdateCard = async (
  titulo: string,
  conteudo: string,
  lista: string
) => {
  const configAxios = config(
    "put",
    "cards",
    {
      "Content-Type": "application/json",
    },
    {
      titulo,
      conteudo,
      lista,
    }
  );

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
