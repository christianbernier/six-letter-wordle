import { Character, Guess, KeyboardState } from '../../model';
import { getInitialKeyboardState } from '../../utils/keyboard.utils';

export interface GameState {
  isOver: boolean;
  win: boolean;
  answer: string;
  guessesRemaining: number;
  guesses: Guess[];
  guessInProgress: Character[];
  keyboardState: KeyboardState;
}

export const initialGameState: GameState = {
  isOver: false,
  win: false,
  answer: 'AABCDE',
  guessesRemaining: 6,
  guesses: [],
  guessInProgress: [],
  keyboardState: getInitialKeyboardState(),
};
