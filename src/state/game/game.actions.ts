import { Character } from '../../model';

export enum GameActionType {
  TYPE_LETTER = 'TYPE_LETTER',
  ENTER_GUESS = 'ENTER_GUESS',
  BACKSPACE = 'BACKSPACE',
  RESTART = 'RESTART',
}

export type GameAction =
  | {
      type: GameActionType.RESTART;
    }
  | {
      type: GameActionType.TYPE_LETTER;
      letter: Character;
    }
  | {
      type: GameActionType.BACKSPACE;
    }
  | {
      type: GameActionType.ENTER_GUESS;
    };
