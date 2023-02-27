import { ICard } from "../../model/Card.type";

export type AllCardContextType = {
  allCards: ICard[];
  setLoadCardsFlag: React.Dispatch<React.SetStateAction<boolean>>;
  doing?: ICard[];
  toDo?: ICard[];
  done?: ICard[];
};
