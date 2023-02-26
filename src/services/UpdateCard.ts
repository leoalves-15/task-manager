import axios from "axios";
import { ICard } from "../model/Card.type";
import { config } from "./ConfigAxios";

export const UpdateCard = async (card: ICard) => {
  const configAxios = config(
    "put",
    `cards/${card.id}`,
    {
      "Content-Type": "application/json",
    },
    {
      titulo: card.title,
      conteudo: card.description,
      lista: card.status,
      id: card.id
    }
  );

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
