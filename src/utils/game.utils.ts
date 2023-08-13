import { Character, Guess, KeyboardState, Letter, LetterState } from '../model';

export const charactersToString = (characters: Character[]): string =>
  characters.reduce(
    (acc: string, next: Character): string => `${acc}${next}`,
    ''
  );

export const processGuess = (
  characters: Character[],
  answer: string
): Guess => {
  const answerCharactersLeft = [...answer];

  // First, assume no letters match
  const letters: Letter[] = characters.map(
    (character: Character): Letter => ({
      letter: character,
      state: LetterState.NO_MATCH,
    })
  );

  // Do a first pass to see if any characters match in the correct position
  characters.forEach((character: Character, characterIndex: number): void => {
    if (answer[characterIndex] === character) {
      letters[characterIndex].state = LetterState.MATCH;
      answerCharactersLeft[characterIndex] = '.';
    }
  });

  // Then do a pass to see if any characters are in the wrong position
  characters.forEach((character: Character, characterIndex: number): void => {
    const indexInAnswer = answerCharactersLeft.indexOf(character);
    if (
      letters[characterIndex].state === LetterState.NO_MATCH && // only check if it's not in the correct position
      indexInAnswer !== -1
    ) {
      letters[characterIndex].state = LetterState.POSITION_WRONG;
      answerCharactersLeft[indexInAnswer] = '.';
    }
  });

  return {
    letters,
  };
};

export const updateKeyboardWithGuess = (
  prevKeyboard: KeyboardState,
  guess: Guess
): KeyboardState => {
  const newState: KeyboardState = new Map();

  prevKeyboard.forEach((letterState: LetterState, key: Character): void => {
    newState.set(key, letterState);
  });

  guess.letters.forEach((letter: Letter): void => {
    if (!newState.get(letter.letter)) {
      newState.set(letter.letter, letter.state);
      return;
    }

    if (newState.get(letter.letter) === LetterState.NO_MATCH) {
      newState.set(letter.letter, letter.state);
    } else if (
      newState.get(letter.letter) === LetterState.POSITION_WRONG &&
      letter.state === LetterState.MATCH
    ) {
      newState.set(letter.letter, LetterState.MATCH);
    }
  });

  return newState;
};
