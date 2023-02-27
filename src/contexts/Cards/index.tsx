import React, { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { ICard } from "../../model/Card.type";
import { GetCard } from "../../services";
import { CardContextType } from "./CardContext.types";

export const ContextCards = createContext<CardContextType>(
  {} as CardContextType
);

export const CardsProvider = (props: { children: ReactNode }) => {
  const [allCards, setAllCards] = useState<ICard[]>([]);
  const [toDo, setToDo] = useState<ICard[]>([]);
  const [doing, setDoing] = useState<ICard[]>([]);
  const [done, setDone] = useState<ICard[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      setAllCards(await GetCard());
    };
    loadCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let todo = allCards.filter((card) => card.lista === "todo");
    let doing = allCards.filter((card) => card.lista === "doing");
    let done = allCards.filter((card) => card.lista === "done");
    setToDo(todo);
    setDoing(doing);
    setDone(done);
  }, [allCards]);

  return (
    <ContextCards.Provider value={{ toDo, doing, done, allCards, setAllCards }}>
      {props.children}
    </ContextCards.Provider>
  );
};
