import React, { useContext } from "react";
import Column from "../column";
import { Container } from "./styles";
import { ContextAllCards } from "../../contexts";

function Board() {
  const { toDo, doing, done } = useContext(ContextAllCards);
  return (
    <Container>
      <Column title="New" listId="new" />
      <Column title="To do" cards={toDo} listId="todo"/>
      <Column title="Doing" cards={doing} listId="doing"/>
      <Column title="Done" cards={done} listId="done"/>
    </Container>
  );
}

export default Board;
