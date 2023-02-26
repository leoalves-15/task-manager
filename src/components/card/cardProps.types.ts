import { ICard } from "../../model/Card.type";

export type CardProps = {
  card: ICard;
  type: 'new' | 'normal' | 'edit'
};

export type StyleProps = {
  isDragging: boolean;
};
