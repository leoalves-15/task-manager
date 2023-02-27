import { FC } from "react";
import { CardProps } from "./cardProps.types";
import NewCard from "./newCard";
import ViewCard from "./viewCard";

const Card: FC<CardProps> = (props) => {
  const { card, type } = props;
  
  return (
    <>
      {type === "new" ? (
        <NewCard type={type} card={card} />
      ) : (
        <ViewCard type={type} card={card} />
      )}
    </>
  );
};

export default Card;
