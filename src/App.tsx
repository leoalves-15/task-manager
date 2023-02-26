import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd/dist/core";
import Board from "./components/board";
import { CardsProvider } from "./contexts";

function App() {
  return (
    <CardsProvider>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </CardsProvider>
  );
}

export default App;
