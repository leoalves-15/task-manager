import { ICard } from "../../model/Card.type";

export type CardContextType = {
  done?: ICard[];
  toDo?: ICard[];
  doing?: ICard[];
};
