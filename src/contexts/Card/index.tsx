import React, { createContext, useState } from "react";
import { ReactNode } from "react";
import { ICard } from "../../model/Card.type";
import { CardContextType } from "./CardContext.types";

export const ContextCards = createContext<CardContextType>(
  {} as CardContextType
);

export const CardsProvider = (props: { children: ReactNode }) => {
  const [cardSatus, setCardStatus] = useState<"new" | "view" | "edit">("new");
  const [currentEditCard, setCurrentEditCard] = useState<ICard>({} as ICard);
  const [currentList, setCurrentList] = useState<
    "new" | "toDo" | "doing" | "done"
  >("" as "new" | "toDo" | "doing" | "done");

  return (
    <ContextCards.Provider
      value={{
        cardSatus,
        setCardStatus,
        currentEditCard,
        setCurrentEditCard,
        currentList,
        setCurrentList,
      }}
    >
      {props.children}
    </ContextCards.Provider>
  );
};
