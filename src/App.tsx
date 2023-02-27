import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd/dist/core";
import Board from "./components/board";
import { AllCardsProvider } from "./contexts";

function App() {
  return (
    <AllCardsProvider>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </AllCardsProvider>
  );
}

export default App;
