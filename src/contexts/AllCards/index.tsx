import React, { createContext, useEffect, useState, useContext } from "react";
import { ReactNode } from "react";
import { ICard } from "../../model/Card.type";
import { GetCard } from "../../services";
import { AllCardContextType } from "./CardContext.types";
import { ContextLogin } from "../Login";

export const ContextAllCards = createContext<AllCardContextType>(
  {} as AllCardContextType
);

export const AllCardsProvider = (props: { children: ReactNode }) => {
  const [loadCardsFlag, setLoadCardsFlag] = useState<boolean>(false);
  const [allCards, setAllCards] = useState<ICard[]>([]);
  const [toDo, setToDo] = useState<ICard[]>([]);
  const [doing, setDoing] = useState<ICard[]>([]);
  const [done, setDone] = useState<ICard[]>([]);

  const { token } = useContext(ContextLogin);

  useEffect(() => {
    const loadCards = async () => {
      if (token) {
        console.log("t", token);
        setAllCards(await GetCard(token));
      }
    };
    loadCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadCardsFlag, token]);

  useEffect(() => {
    let todo = allCards?.filter((card) => card.lista === "toDo");
    let doing = allCards?.filter((card) => card.lista === "doing");
    let done = allCards?.filter((card) => card.lista === "done");
    setToDo(todo);
    setDoing(doing);
    setDone(done);
  }, [allCards]);

  return (
    <ContextAllCards.Provider
      value={{ toDo, doing, done, allCards, setLoadCardsFlag }}
    >
      {props.children}
    </ContextAllCards.Provider>
  );
};
