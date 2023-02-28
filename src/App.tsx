import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd/dist/core";
import Board from "./components/board";
import { AllCardsProvider, LoginProvider } from "./contexts";
import "./styles.css";

function App() {
  return (
    <LoginProvider>
      <AllCardsProvider>
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </AllCardsProvider>
    </LoginProvider>
  );
}

export default App;
