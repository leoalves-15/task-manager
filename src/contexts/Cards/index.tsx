import React, { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { ICard } from "../../model/Card.type";
import { GetCard } from "../../services";
import { CardContextType } from "./CardContext.types";

export const ContextCards = createContext<CardContextType>(
  {} as CardContextType
);

export const CardsProvider = (props: { children: ReactNode }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [toDo, setToDo] = useState<ICard[]>([]);
  const [doing, setDoing] = useState<ICard[]>([]);
  const [done, setDone] = useState<ICard[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      setCards(await GetCard());
    };
    loadCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let todo = cards.filter((card) => card.lista === "todo");
    let doing = cards.filter((card) => card.lista === "doing");
    let done = cards.filter((card) => card.lista === "done");
    setToDo(todo);
    setDoing(doing);
    setDone(done);
  }, [cards]);

  return (
    <ContextCards.Provider value={{ toDo, doing, done }}>
      {props.children}
    </ContextCards.Provider>
  );
};
