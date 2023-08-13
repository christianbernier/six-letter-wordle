import React, { FC } from 'react';
import {
  KeyboardCharacter,
  KeyboardKey,
  KeyboardLayout,
  KeyboardState,
  LetterState,
} from '../../model';

import './keyboard.component.css';
import { letterStateCssClass } from '../../utils/letter.utils';

export interface KeyboardParams {
  layout: KeyboardLayout;
  state: KeyboardState;
  keyClicked: (character: KeyboardCharacter) => void;
}

const KEYBOARD_STATE_DEFAULT = 'letter-state-default';

export const Keyboard: FC<KeyboardParams> = (params) => {
  const keyboardStateCssClass = (key: KeyboardKey): string => {
    if (key.character === 'ENTER' || key.character === 'BACKSPACE') {
      return KEYBOARD_STATE_DEFAULT;
    }

    const keyState = params.state.get(key.character);
    return keyState ? letterStateCssClass(keyState) : KEYBOARD_STATE_DEFAULT;
  };

  return (
    <div className='keyboard'>
      {params.layout.map((keyRow: KeyboardKey[], rowIndex: number) => (
        <div key={`keyboard--r${rowIndex}`} className='keyboard--row'>
          {keyRow.map((keyboardKey: KeyboardKey, keyIndex: number) => (
            <button
              key={`keyboard--r${rowIndex}-c${keyIndex}`}
              className={`keyboard--key keyboard--${keyboardStateCssClass(
                keyboardKey
              )}`}
              style={{ width: keyboardKey.width || undefined }}
              onClick={() => params.keyClicked(keyboardKey.character)}
            >
              {keyboardKey.display || <span>{keyboardKey.character}</span>}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
