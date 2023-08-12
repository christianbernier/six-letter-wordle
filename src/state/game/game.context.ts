import { Dispatch, createContext } from 'react';
import { GameState, initialGameState } from './game.state';
import { GameAction } from './game.actions';

export const GameContext = createContext<GameState>(initialGameState);
export const GameDispatchContext = createContext<Dispatch<GameAction>>(
  () => undefined
);
