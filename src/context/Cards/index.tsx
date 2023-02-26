import React, { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { ICard } from "../../model/Card.type";
import { GetCard } from "../../services";
import { CardContextType } from "./CardContext.types";

export const ContextCards = createContext<CardContextType>(
  {} as CardContextType
);

const CardsProvider = (props: { children: ReactNode }) => {
  const [cards, setCards] = useState<ICard[]>();

  useEffect(() => {
    const loadCards = async () => {
      setCards(await GetCard());
    };
    loadCards();
  }, []);

  return (
    <ContextCards.Provider value={{ cards }}>
      {props.children}
    </ContextCards.Provider>
  );
};

export default CardsProvider;
