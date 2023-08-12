import React from 'react';
import { KeyboardKey, KeyboardLayout } from '../model';
import { BsFillBackspaceFill } from 'react-icons/bs';

export const ENTER_KEY: KeyboardKey = {
  character: 'ENTER',
  width: 60,
  display: <span className='keyboard--enter-key'>ENTER</span>,
};

export const BACKSPACE_KEY: KeyboardKey = {
  character: 'BACKSPACE',
  width: 60,
  display: <BsFillBackspaceFill color='white' size={24} />,
};

export const QWERTY_KEYBOARD_LAYOUT: KeyboardLayout = [
  [
    { character: 'Q' },
    { character: 'W' },
    { character: 'E' },
    { character: 'R' },
    { character: 'T' },
    { character: 'Y' },
    { character: 'U' },
    { character: 'I' },
    { character: 'O' },
    { character: 'P' },
  ],
  [
    { character: 'A' },
    { character: 'S' },
    { character: 'D' },
    { character: 'F' },
    { character: 'G' },
    { character: 'H' },
    { character: 'J' },
    { character: 'K' },
    { character: 'L' },
  ],
  [
    ENTER_KEY,
    { character: 'Z' },
    { character: 'X' },
    { character: 'C' },
    { character: 'V' },
    { character: 'B' },
    { character: 'N' },
    { character: 'M' },
    BACKSPACE_KEY,
  ],
];
