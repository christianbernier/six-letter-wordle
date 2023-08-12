export enum LetterState {
  NO_MATCH = 'NO_MATCH',
  POSITION_WRONG = 'POSITION_WRONG',
  MATCH = 'MATCH',
}

export type Character =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

export interface Letter {
  letter: Character;
  state: LetterState;
}
