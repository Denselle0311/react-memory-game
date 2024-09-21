import characters from "../characters";
import { rand } from "../utils/helper";

export const ACTIONS = {
  START_GAME: 'start-game',
  RESET_TO_HOME: 'reset-to-home',
  PLAY_AGAIN: 'play-again',
  WIN_GAME: 'win-game',
  CLICK_CARD: 'click-card',
  INCREMENT_SCORE: 'increment-score',
  SHUFFLE_CARD: 'shuffle-card',
};

export const initialChar = initializeChar(characters, {rounds:3});

function initializeChar(characters, difficulty) {
    const randomChar = [];

    while (randomChar.length < difficulty.rounds) {
      const randNum = rand(9);

      if (!randomChar.includes(characters[randNum])) {
        randomChar.push(characters[randNum]);
      }
    }
    // chars
    return randomChar;
  }

function shuffle(chars, difficulty) {
    const shuffledChars = [];
    let clicked = 0;

    while (shuffledChars.length < difficulty.cardQuantity) {
      const randNum = rand(chars.length);
      const randomChar = chars[randNum];
      if (
        !shuffledChars.includes(randomChar) &&
        (clicked < difficulty.rounds - 1 || !randomChar.isClicked)
      ) {
        shuffledChars.push(randomChar);
        clicked += +randomChar.isClicked;
      }
    }
    // charsToDisplay
    return shuffledChars;
  }

export function initGameState(charArr) {
  return {
    characters: charArr,
    isGameStart: false,
    isGameOver: false,
    isWin: false,
    currentScore: 0,
    bestScore: 0,
  };
};

function gameOver(gameState) {
  console.log('Game Over');
  const bestScore = 
    gameState.currentScore > gameState.bestScore 
      ? gameState.currentScore
      : gameState.bestScore;
  
  return {
    ...gameState,
    isGameOver: true,
    currentScore: 0,
    bestScore,
  }
}

export default function gameReducer(gameState, action) {
  switch(action.type) {
    case ACTIONS.START_GAME: {
      const chars = initializeChar(characters, action.difficulty);

      return {
        ...initGameState(chars),
        difficulty: action.difficulty,
        cardsToDisplay: shuffle(chars, action.difficulty),
        isGameStart: true,
      };
    }
    case ACTIONS.RESET_TO_HOME: {
      const chars = initializeChar(characters, gameState.difficulty);

      return {
        ...initGameState(chars),
        bestScore: 0,
        currentScore: 0,
        isWin: false,
      };
    }
    case ACTIONS.WIN_GAME: {
      return gameOver({
        ...gameState,
        isWin: true,
      });
    }
    case ACTIONS.PLAY_AGAIN: {
      const chars = initializeChar(characters, gameState.difficulty);
      return {
        ...gameState,
        characters: chars,
        cardsToDisplay: shuffle(chars, gameState.difficulty),
        isGameOver: false,
        isWin: false,
      }
    }
    case ACTIONS.INCREMENT_SCORE: {
      return {
        ...gameState,
        currentScore: gameState.currentScore + 1,
      };
    }
    case ACTIONS.CLICK_CARD: {
      const selectedChar = gameState.characters.find(
        c => c.id == action.id
      );

      if(selectedChar.isClicked) {
        return gameOver(gameState);
      }

      const arrayWithClickedChar = gameState.characters.map((char) =>
        char.id === action.id ? { ...char, isClicked: true } : char
      );

      return {
        ...gameState,
        characters: arrayWithClickedChar,
      }
    }
    case ACTIONS.SHUFFLE_CARD: {
      return {
        ...gameState,
        cardsToDisplay: shuffle(gameState.characters, gameState.difficulty),
      }
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}

