import { FC, useContext } from "react";
import { ContextCards } from "../../contexts";
import { CardProps } from "./cardProps.types";
import NewCard from "./newCard";
import ViewCard from "./viewCard";

const Card: FC<CardProps> = (props) => {
  const { card, isNew } = props;
  const { cardSatus } = useContext(ContextCards);

  return (
    <>
      {isNew || cardSatus === "edit" ? (
        <NewCard card={card} />
      ) : (
        <ViewCard card={card} />
      )}
    </>
  );
};

export default Card;
