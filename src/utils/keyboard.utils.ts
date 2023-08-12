import { Character, KeyboardState, LetterState } from '../model';

export const VALID_KEYS: Character[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export const getInitialKeyboardState = (): KeyboardState => {
  const state: KeyboardState = new Map();
  VALID_KEYS.forEach((character: Character): void => {
    state.set(character, LetterState.NO_MATCH);
  });
  return state;
};
