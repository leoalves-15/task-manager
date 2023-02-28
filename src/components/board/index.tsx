import React, { useContext } from "react";
import Column from "../column";
import { Container, Row } from "./styles";
import { ContextAllCards } from "../../contexts";
import Header from "../header";

function Board() {
  const { toDo, doing, done } = useContext(ContextAllCards);
  return (
    <Container>
      <Header />
      <Row>
        <Column title="New" listId="new" />
        <Column title="To do" cards={toDo} listId="toDo" />
        <Column title="Doing" cards={doing} listId="doing" />
        <Column title="Done" cards={done} listId="done" />
      </Row>
    </Container>
  );
}

export default Board;
