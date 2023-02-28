import axios from "axios";
import { ICard } from "../model/Card.type";
import { config } from "./ConfigAxios";

export const CreateCard = async (card: ICard, token: string) => {
  const configAxios = config(
    "post",
    "cards",
    token,
    {
      "Content-Type": "application/json",
    },
    {
      titulo: card.titulo,
      conteudo: card.conteudo,
      lista: "toDo",
    }
  );

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
