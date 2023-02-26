import axios from "axios";
import { ICard } from "../model/Card.type";
import { config } from "./ConfigAxios";

export const CreateCard = async (
  card: ICard
) => {
  const configAxios = config(
    "post",
    "cards",
    {
      "Content-Type": "application/json",
    },
    {
      titulo: card.title,
      conteudo: card.description,
      lista: card.status,
    }
  );

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
