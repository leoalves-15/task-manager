import React, { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { ICard } from "../../model/Card.type";
import { GetCard } from "../../services";
import { AllCardContextType } from "./CardContext.types";

export const ContextAllCards = createContext<AllCardContextType>(
  {} as AllCardContextType
);

export const AllCardsProvider = (props: { children: ReactNode }) => {
  const [loadCardsFlag, setLoadCardsFlag] = useState<boolean>(false);
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
  }, [loadCardsFlag]);

  useEffect(() => {
    let todo = allCards.filter((card) => card.lista === "toDo");
    let doing = allCards.filter((card) => card.lista === "doing");
    let done = allCards.filter((card) => card.lista === "done");
    setToDo(todo);
    setDoing(doing);
    setDone(done);
  }, [allCards]);

  return (
    <ContextAllCards.Provider value={{ toDo, doing, done, allCards, setLoadCardsFlag }}>
      {props.children}
    </ContextAllCards.Provider>
  );
};
