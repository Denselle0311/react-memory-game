// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import characters from "./characters";
import GameoverPage from "./pages/GameOverPage";
import StartPage from "./pages/StartPage";

function App() {
  const five = characters.filter((_, idx) => idx < 5);
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-full max-w-7xl">
        {/* <StartPage /> */}
        <GameoverPage />
      </div>
      <div
        className="min-h-full min-w-full  bg-no-repeat bg-cover bg-center absolute top-0 -z-10"
        style={{
          backgroundImage: "url(src/assets/background/at-bg.webp)",
        }}
      ></div>
    </>
  );
}

export default App;
