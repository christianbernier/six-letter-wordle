import React, { FC } from 'react';
import { Character, Guess, Letter } from '../../model';

import './guess-row.component.css';
import { letterStateCssClass } from '../../utils/letter.utils';

export enum GuessRowType {
  COMPLETE = 'COMPLETE',
  IN_PROGRESS = 'IN_PROGRESS',
  BLANK = 'BLANK',
}

export type GuessRowParams = (
  | {
      type: GuessRowType.COMPLETE;
      guess: Guess;
    }
  | {
      type: GuessRowType.IN_PROGRESS;
      letters: Character[];
    }
  | {
      type: GuessRowType.BLANK;
    }
) & {
  rowIndex: number;
};

export const GuessRow: FC<GuessRowParams> = (params) => {
  return (
    <div className='guess-row--container'>
      {params.type === GuessRowType.COMPLETE &&
        params.guess.letters.map((letter: Letter, index: number) => (
          <div
            key={`guess-row--r${params.rowIndex}-c${index}`}
            className={`guess-row--letter-tile guess-row--${letterStateCssClass(
              letter.state
            )}`}
          >
            <span>{letter.letter}</span>
          </div>
        ))}
      {params.type === GuessRowType.IN_PROGRESS && (
        <>
          {params.letters.map((letter: Character, index: number) => (
            <div
              key={`guess-row--r${params.rowIndex}-c${index}`}
              className={
                'guess-row--letter-tile guess-row--letter-state-default'
              }
            >
              <span>{letter}</span>
            </div>
          ))}
          {[...Array(6 - params.letters.length)].map((_, index: number) => (
            <div
              key={`guess-row--r${params.rowIndex}-c${index}`}
              className='guess-row--blank-tile'
            ></div>
          ))}
        </>
      )}
      {params.type === GuessRowType.BLANK &&
        [...Array(6)].map((_, index: number) => (
          <div
            key={`guess-row--r${params.rowIndex}-c${index}`}
            className='guess-row--blank-tile'
          ></div>
        ))}
    </div>
  );
};
