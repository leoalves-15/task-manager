import { ICard } from "../../model/Card.type";

export type CardContextType = {
  allCards: ICard[];
  setAllCards: React.Dispatch<React.SetStateAction<ICard[]>>;
  doing?: ICard[];
  toDo?: ICard[];
  done?: ICard[];
};
