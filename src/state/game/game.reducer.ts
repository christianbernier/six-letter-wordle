import { GameAction, GameActionType } from './game.actions';
import { GameState, initialGameState } from './game.state';
import {
  charactersToString,
  processGuess,
  updateKeyboardWithGuess,
} from '../../utils/game.utils';
import { WORDS } from '../../fixtures/dictionary';

export function gameReducer(
  prevState: GameState,
  action: GameAction
): GameState {
  if (action.type === GameActionType.RESTART) {
    const answer = WORDS[Math.floor(Math.random() * WORDS.length)];
    return {
      ...initialGameState,
      isOver: false,
      answer,
    };
  } else if (prevState.isOver) {
    return prevState;
  }

  switch (action.type) {
    case GameActionType.TYPE_LETTER: {
      if (prevState.guessInProgress.length >= 6) {
        return prevState;
      }

      return {
        ...prevState,
        guessInProgress: [...prevState.guessInProgress, action.letter],
      };
    }
    case GameActionType.BACKSPACE: {
      if (prevState.guessInProgress.length === 0) {
        return prevState;
      }

      return {
        ...prevState,
        guessInProgress: [...prevState.guessInProgress.slice(0, -1)],
      };
    }
    case GameActionType.ENTER_GUESS: {
      if (prevState.guessInProgress.length !== 6) {
        return prevState;
      }

      const wordGuessed = charactersToString(prevState.guessInProgress);

      // Only accept valid words
      if (!WORDS.includes(wordGuessed)) {
        return prevState;
      }

      const win = wordGuessed === prevState.answer;
      const isOver = win || prevState.guessesRemaining === 1;

      const newGuess = processGuess(
        prevState.guessInProgress,
        prevState.answer
      );

      return {
        ...prevState,
        guessesRemaining: prevState.guessesRemaining - 1,
        guessInProgress: [],
        guesses: [...prevState.guesses, newGuess],
        isOver,
        win,
        keyboardState: updateKeyboardWithGuess(
          prevState.keyboardState,
          newGuess
        ),
      };
    }
    default:
      return prevState;
  }
}
