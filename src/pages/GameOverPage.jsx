/* eslint-disable react/prop-types */
import Button from "../components/Button";
import { ACTIONS } from "../reducer/gameReducer";

const winBg = "url(src/assets/background/at-bg.jpg)";
const lossBg = "url(src/assets/background/at-diff-bg.jpg)";

export default function GameoverPage({ gameState, dispatch }) {
  return (
    <div className="flex flex-col m-[auto] min-h-72 justify-center gap-14 items-center relative z-20">
      <div
        id="win"
        style={{ backgroundImage: `${gameState.isWin ? winBg : lossBg}` }}
        className="w-[300px] md:w-[500px] lg:w-[700px] lg:h-[500px] min-h-72 bg-cover brightness-[.60] bg-[center_top] absolute -z-10 rounded-xl"
      ></div>
      <h1 className="text-white lg:text-7xl">
        You {gameState.isWin ? "Win!!" : "Loss!!"}
      </h1>
      <Button
        onClick={() => dispatch({ type: ACTIONS.RESET_TO_HOME })}
        className="bg-black py-1 px-3 lg:px-5 lg:py-2"
      >
        Restart
      </Button>
    </div>
  );
}
