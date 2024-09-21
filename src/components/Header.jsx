/* eslint-disable react/prop-types */
import Logo from "./Logo";

export default function Header({ gameState, dispatch }) {
  return (
    <header className="flex items-center justify-between px-2 py-1 s md:px-5 md:py-3">
      <Logo isHeader={true} dispatch={dispatch} />
      <div className="flex flex-col lg:text-lg">
        <span>Score: {gameState.currentScore}</span>
        <span>BestScore: {gameState.bestScore}</span>
      </div>
    </header>
  );
}
