import React, { useContext } from "react";
import Column from "../column";
import { Container } from "./styles";
import { ContextCards } from "../../contexts";

function Board() {
  const { toDo, doing, done } = useContext(ContextCards);
  return (
    <Container>
      <Column title="New" isNew />
      <Column title="To do" cards={toDo} />
      <Column title="Doing" cards={doing} />
      <Column title="Done" cards={done} />
    </Container>
  );
}

export default Board;
