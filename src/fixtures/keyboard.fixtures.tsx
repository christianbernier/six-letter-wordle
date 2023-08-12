import React from 'react';
import { KeyboardLayout } from '../model';
import { BsFillBackspaceFill } from 'react-icons/bs';

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
    {
      character: 'ENTER',
      width: 75,
      display: <span className='keyboard--enter-key'>ENTER</span>,
    },
    { character: 'Z' },
    { character: 'X' },
    { character: 'C' },
    { character: 'V' },
    { character: 'B' },
    { character: 'N' },
    { character: 'M' },
    {
      character: 'BACKSPACE',
      width: 75,
      display: <BsFillBackspaceFill color='white' size={24} />,
    },
  ],
];
