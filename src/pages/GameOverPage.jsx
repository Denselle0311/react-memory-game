/* eslint-disable react/prop-types */
import winBg from "../assets/background/at-bg.jpg";
import lossBg from "../assets/background/at-diff-bg.jpg";
import Button from "../components/Button";
import { ACTIONS } from "../reducer/gameReducer";

export default function GameoverPage({ gameState, dispatch }) {
  return (
    <div className="flex flex-col m-[auto] min-h-72 justify-center gap-14 items-center relative z-20">
      <div
        id="win"
        style={{ backgroundImage: `url(${gameState.isWin ? winBg : lossBg})` }}
        className="w-[300px] md:w-[500px] lg:w-[700px] lg:h-[500px] min-h-72 bg-cover brightness-[.60] bg-[center_top] absolute -z-10 rounded-xl"
      ></div>
      <h1 className="text-white lg:text-7xl">
        You {gameState.isWin ? "Win!!" : "Loss!!"}
      </h1>
      <div className="flex flex-col text-2xl">
        <span>Score: {gameState.currentScore}</span>
        <span>BestScore: {gameState.bestScore}</span>
      </div>
      <div className="flex gap-5">
        <Button
          onClick={() => dispatch({ type: ACTIONS.PLAY_AGAIN })}
          className="bg-black py-1 px-3 lg:px-5 lg:py-2"
        >
          Restart
        </Button>
        <Button
          onClick={() => dispatch({ type: ACTIONS.RESET_TO_HOME })}
          className="bg-black py-1 px-3 lg:px-5 lg:py-2"
        >
          Home
        </Button>
      </div>
    </div>
  );
}
