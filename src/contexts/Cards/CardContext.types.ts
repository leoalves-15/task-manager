import { ICard } from "../../model/Card.type";

export type CardContextType = {
  allCards: ICard[];
  setAllCards: React.Dispatch<React.SetStateAction<ICard[]>>;
  setLoadCardsFlag: React.Dispatch<React.SetStateAction<boolean>>;
  doing?: ICard[];
  toDo?: ICard[];
  done?: ICard[];
};
