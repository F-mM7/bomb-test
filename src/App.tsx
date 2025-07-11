import React from "react";
import StartPage from "./components/pages/StartPage";
import MainPage from "./components/pages/MainPage";
import { useGameState } from "./hooks/useGameState";

const App: React.FC = () => {
  const { gameState, startGame } = useGameState();

  if (gameState === "start") {
    return <StartPage onStart={startGame} />;
  }

  return <MainPage />;
};

export default App;
