import { LetterState } from '../model';

export const letterStateCssClass = (letterState: LetterState): string => {
  return `letter-state-${letterState.toLowerCase().replace('_', '-')}`;
};
