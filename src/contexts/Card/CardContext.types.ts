import { ICard } from "../../model/Card.type";

export type CardContextType = {
  cardSatus: "new" | "view" | "edit";
  setCardStatus: React.Dispatch<React.SetStateAction<"new" | "view" | "edit">>;
  currentList: "new" | "toDo" | "doing" | "done";
  setCurrentList: React.Dispatch<
    React.SetStateAction<"new" | "toDo" | "doing" | "done">
  >;
  currentEditCard: ICard;
  setCurrentEditCard: React.Dispatch<React.SetStateAction<ICard>>;
};
