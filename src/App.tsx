import React from "react";
import { StartPage, MainPage } from "./features/game";
import { useGameState } from "./features/game";

const App: React.FC = () => {
  const { gameState, startGame } = useGameState();

  if (gameState === "start") {
    return <StartPage onStart={startGame} />;
  }

  return <MainPage />;
};

export default App;
