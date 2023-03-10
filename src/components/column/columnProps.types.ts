import { ICard } from "../../model/Card.type";

export type ColumnProps = {
  title: string;
  cards?: ICard[];
  listId: "new" | "toDo" | "doing" | "done";
};
