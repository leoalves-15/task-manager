import { ICard } from "../../model/Card.type";

export type ColumnProps = {
  title: string;
  cards?: ICard[];
  isNew?: boolean;
};
