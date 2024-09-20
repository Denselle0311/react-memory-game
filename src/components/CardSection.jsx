/* eslint-disable react/prop-types */
import { useState } from "react";
import { ACTIONS } from "../reducer/gameReducer";
import Card from "./Card";

export default function CardSection(props) {
  const { gameState, dispatch } = props;

  const [isClicked, setIsClicked] = useState(false);

  function handleClick(char) {
    const chosenCharacter = gameState.characters.find((c) => c.id === char.id);

    if (chosenCharacter.isClicked) {
      console.log("loss");
    }

    console.log("flip true");
    setIsClicked((i) => !i);

    dispatch({ type: ACTIONS.INCREMENT_SCORE });

    dispatch({ type: ACTIONS.CLICK_CARD, id: char.id });

    setTimeout(() => {
      console.log("shuffle");
      dispatch({ type: ACTIONS.SHUFFLE_CARD });
    }, 800);

    setTimeout(() => {
      setIsClicked((i) => !i);
      console.log("flip false");
    }, 1300);
  }

  return (
    <div className="flex flex-col gap-2 items-center m-auto text-center">
      <div className="flex flex-wrap justify-center  gap-2 max-h-screen px-2">
        {gameState.cardsToDisplay.map((c) => (
          <Card
            key={c.id}
            src={c.src}
            handleClick={() => handleClick(c)}
            isClicked={isClicked}
          >
            {c.name}
          </Card>
        ))}
      </div>
      <span className="lg:text-lg bg-slate-500 px-2 rounded-md">
        {gameState.currentScore}/{gameState.characters.length}
      </span>
    </div>
  );
}
