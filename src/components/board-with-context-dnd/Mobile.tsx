import React from "react";
import { DndProvider } from "react-dnd/dist/core";
import Board from "../board";
import { TouchBackend } from "react-dnd-touch-backend";

function Mobile() {
  return (
    <DndProvider
      backend={TouchBackend}
      options={{
        scrollAngleRanges: [
          { start: 30, end: 150 },
          { start: 210, end: 330 },
        ],
      }}
    >
      <Board />
    </DndProvider>
  );
}

export default Mobile;
