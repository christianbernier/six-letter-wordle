import React, { FC, useContext } from 'react';
import { Character, Guess } from '../../model';

import './guess-grid.component.css';
import { GuessRow, GuessRowType } from '../guess-row/guess-row.component';
import { GameContext } from '../../state/game/game.context';

export interface GuessGridParams {
  guesses: Guess[];
  guessInProgress: Character[];
}

export const GuessGrid: FC<GuessGridParams> = (params) => {
  const state = useContext(GameContext);

  const numCompleteGuesses = params.guesses.length;
  const showInProgressGuess = !state.isOver;
  let numBlankGuesses = Math.max(0, 6 - numCompleteGuesses - 1);

  if (state.win && state.guessesRemaining > 0) {
    numBlankGuesses++;
  }

  return (
    <div className='guess-grid'>
      {params.guesses.map((guess: Guess, index: number) => (
        <GuessRow
          key={`guess-grid--r${index}`}
          type={GuessRowType.COMPLETE}
          guess={guess}
          rowIndex={index}
        />
      ))}
      {showInProgressGuess && (
        <GuessRow
          key={`guess-grid--r${numCompleteGuesses}`}
          type={GuessRowType.IN_PROGRESS}
          letters={params.guessInProgress}
          rowIndex={numCompleteGuesses}
        />
      )}
      {[...Array(numBlankGuesses)].map((_, index: number) => (
        <GuessRow
          key={`guess-grid--r${numCompleteGuesses + index + 1}`}
          type={GuessRowType.BLANK}
          rowIndex={numCompleteGuesses + index + 1}
        />
      ))}
    </div>
  );
};
