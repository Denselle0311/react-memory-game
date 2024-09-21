// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import background from "./assets/background/at-bg.webp";
import CardSection from "./components/CardSection";
import GameoverPage from "./pages/GameOverPage";
import StartPage from "./pages/StartPage";
import gameReducer, {
  ACTIONS,
  initGameState,
  initialChar,
} from "./reducer/gameReducer";

function App() {
  const [gameState, dispatch] = useReducer(
    gameReducer,
    initialChar,
    initGameState
  );

  useEffect(() => {
    localStorage.setItem("bestScore", JSON.stringify(gameState.bestScore));
  }, [gameState.bestScore]);

  const isWin = gameState.currentScore == gameState.difficulty?.rounds;
  useEffect(() => {
    if (isWin) {
      console.log("win");
      dispatch({ type: ACTIONS.WIN_GAME });
    }
  }, [isWin]);

  console.log("render");
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-full max-w-7xl">
        {!gameState.isGameStart ? (
          <StartPage dispatch={dispatch} />
        ) : gameState.isGameStart && !gameState.isGameOver ? (
          <CardSection gameState={gameState} dispatch={dispatch} />
        ) : (
          <GameoverPage gameState={gameState} dispatch={dispatch} />
        )}
      </div>
      <div
        className="min-h-full min-w-full  bg-no-repeat bg-cover bg-center absolute top-0 -z-10"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
    </>
  );
}

export default App;
