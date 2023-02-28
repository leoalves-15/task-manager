import React from "react";
import { AllCardsProvider, LoginProvider } from "./contexts";
import "./styles.css";
import { useMobile } from "./hooks/useMobile";
import Mobile from "./components/board-with-context-dnd/Mobile";
import DeskTop from "./components/board-with-context-dnd/DeskTop";

function App() {
  const { isMobile } = useMobile();

  return (
    <LoginProvider>
      <AllCardsProvider>
        {isMobile && <Mobile />}
        {!isMobile && <DeskTop />}
      </AllCardsProvider>
    </LoginProvider>
  );
}

export default App;
