import { ICard } from "../../model/Card.type";

export type CardProps = {
  card: ICard;
  isNew?: boolean;
};

export type StyleProps = {
  isDragging: boolean;
  isNew: boolean;
};

export type FormProps = Record<string, any>;

