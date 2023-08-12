import { Character, LetterState } from './letter.model';

export interface KeyboardState extends Map<Character, LetterState> {}

export type KeyboardCharacter = Character | 'ENTER' | 'BACKSPACE';

export interface KeyboardKey {
  character: KeyboardCharacter;
  width?: number;
  display?: JSX.Element;
}

export type KeyboardLayout = KeyboardKey[][];
