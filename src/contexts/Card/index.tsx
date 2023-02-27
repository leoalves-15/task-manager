import React, { createContext, useState } from "react";
import { ReactNode } from "react";
import { CardContextType } from "./CardContext.types";

export const ContextCards = createContext<CardContextType>(
  {} as CardContextType
);

export const CardsProvider = (props: { children: ReactNode }) => {
  const [cardSatus, setCardStatus] = useState<"new" | "view" | "edit">("view");

  return (
    <ContextCards.Provider value={{ cardSatus, setCardStatus }}>
      {props.children}
    </ContextCards.Provider>
  );
};
