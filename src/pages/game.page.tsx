import React, { FC, useEffect, useReducer } from 'react';
import { GuessGrid } from '../components/guess-grid/guess-grid.component';
import { Character, KeyboardCharacter } from '../model';
import { useKeyboard } from '../hooks/useKeyboard';
import { gameReducer } from '../state/game/game.reducer';
import { initialGameState } from '../state/game/game.state';
import { GameActionType } from '../state/game/game.actions';
import { GameContext } from '../state/game/game.context';

import './game.page.css';
import { Keyboard } from '../components/keyboard/keyboard.component';
import { QWERTY_KEYBOARD_LAYOUT } from '../fixtures/keyboard.fixtures';
import { GameOverModal } from '../components/game-over-modal/game-over-modal.component';

export const GamePage: FC = () => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const handleLetter = (key: string): void => {
    dispatch({
      type: GameActionType.TYPE_LETTER,
      letter: key as Character,
    });
  };

  const handleBackspace = () =>
    dispatch({
      type: GameActionType.BACKSPACE,
    });

  const handleEnter = () =>
    dispatch({
      type: GameActionType.ENTER_GUESS,
    });

  const handleKeyboardKeyClicked = (key: KeyboardCharacter): void => {
    if (key === 'ENTER') {
      handleEnter();
    } else if (key === 'BACKSPACE') {
      handleBackspace();
    } else {
      handleLetter(key);
    }
  };

  const handleReset = () =>
    dispatch({
      type: GameActionType.RESTART,
    });

  useEffect(() => {
    handleReset();
  }, []);

  useKeyboard(
    handleLetter,
    (key: string) => !!(key.length === 1 && key.match(/[A-Z]/i))
  );
  useKeyboard(handleBackspace, (key: string) => key === 'BACKSPACE');
  useKeyboard(handleEnter, (key: string) => key === 'ENTER');

  return (
    <GameContext.Provider value={state}>
      {state.isOver && (
        <GameOverModal
          win={state.win}
          answer={state.answer}
          numGuesses={6 - state.guessesRemaining}
          onReset={handleReset}
        />
      )}
      <div className='game-page'>
        <span className='game-page--title'>Six-Letter Wordle</span>
        <GuessGrid
          guesses={state.guesses}
          guessInProgress={state.guessInProgress}
        />
        <Keyboard
          layout={QWERTY_KEYBOARD_LAYOUT}
          state={state.keyboardState}
          keyClicked={handleKeyboardKeyClicked}
        />
        <span className='game-page--byline'>
          Made by <a href='https://cbernier.com'>Christian Bernier</a>. Inspired
          by{' '}
          <a href='https://www.nytimes.com/games/wordle/index.html'>Wordle</a>{' '}
          (obviously).
        </span>
      </div>
    </GameContext.Provider>
  );
};
