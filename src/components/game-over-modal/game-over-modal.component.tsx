import React, { FC } from 'react';

import './game-over-modal.component.css';

export interface GameOverModalParams {
  win: boolean;
  answer: string;
  numGuesses: number;
  onReset: () => void;
}

export const GameOverModal: FC<GameOverModalParams> = (params) => {
  return (
    <div className='game-over-modal--overlay'>
      <div className='game-over-modal'>
        <span className='game-over-modal--header'>
          You {params.win ? 'win' : 'lose'}!
        </span>
        {params.win ? (
          <span className='game-over-modal--body-text'>
            The word was{' '}
            <span className='game-over-modal--answer'>{params.answer}</span>,
            which you were able to guess in {params.numGuesses} guess
            {params.numGuesses === 1 ? '' : 'es'}! That's pretty impressive,
            pal. Nice work.
          </span>
        ) : (
          <span className='game-over-modal--body-text'>
            The word was{' '}
            <span className='game-over-modal--answer'>{params.answer}</span>,
            which you couldn't even get in 6 guesses. I'm kinda disappointed,
            but you can always try again, I guess.
          </span>
        )}
        <button
          className='game-over-modal--reset-button'
          onClick={() => params.onReset()}
        >
          Play again
        </button>
      </div>
    </div>
  );
};
