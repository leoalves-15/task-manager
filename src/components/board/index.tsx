import React from "react";
import Column from "../column";
import { Container } from "./styles";

function Board() {
  return (
    <Container>
      <Column title="New"/>
      <Column title="To do"/>
      <Column title="Doing"/>
      <Column title="Done"/>
    </Container>
  );
}

export default Board;
