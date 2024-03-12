/**
 * This file contains test fixtures for the ArgumentIndexException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  ArgumentIndexException as _ArgumentIndexException,
  Exception,
  IndexException,
  InvalidException,
  RangeException,
  ValueException,
} from '../../mod.ts';

export const ArgumentIndexException = _ArgumentIndexException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
  RangeException,
  IndexException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message: 'An index is outside the bounds of an arguments array.',
      toString:
        'ArgumentIndexException: An index is outside the bounds of an arguments array.',
      valueOf: 42,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['An index is not in the arguments array.'],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message: 'An index is not in the arguments array.',
      toString:
        'ArgumentIndexException: An index is not in the arguments array.',
      valueOf: 42,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message: 'An index is outside the bounds of an arguments array.',
      toString:
        'ArgumentIndexException: An index is outside the bounds of an arguments array.',
      valueOf: 42,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { index: 3 };
const data2 = { upperBound: 2 };
const data3 = { ...data1, ...data2 };

export const fixturesNewData = [
  [
    [data1],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message: 'An index, 3, is outside the bounds of an arguments array.',
      toString:
        'ArgumentIndexException: An index, 3, is outside the bounds of an arguments array.',
      valueOf: 42,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data0],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message: 'An index is outside the bounds of an arguments array.',
      toString:
        'ArgumentIndexException: An index is outside the bounds of an arguments array.',
      valueOf: 42,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data2],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message:
        'An index is outside the bounds of an arguments array. It must be between 0 and 2, inclusive.',
      toString:
        'ArgumentIndexException: An index is outside the bounds of an arguments array. It must be between 0 and 2, inclusive.',
      valueOf: 42,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message:
        'An index, 3, is outside the bounds of an arguments array. It must be between 0 and 2, inclusive.',
      toString:
        'ArgumentIndexException: An index, 3, is outside the bounds of an arguments array. It must be between 0 and 2, inclusive.',
      valueOf: 42,
      cause: undefined,
      data: data3,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['A bad index was passed for an args array.', data1],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message: 'A bad index was passed for an args array.',
      toString:
        'ArgumentIndexException: A bad index was passed for an args array.',
      valueOf: 42,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['A bad index was passed for an args array.', data0],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message: 'A bad index was passed for an args array.',
      toString:
        'ArgumentIndexException: A bad index was passed for an args array.',
      valueOf: 42,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['An index is not in the array or args.', data2],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message: 'An index is not in the array or args.',
      toString: 'ArgumentIndexException: An index is not in the array or args.',
      valueOf: 42,
      cause: undefined,
      data: data2,
    },
  ],
  [
    ['Bad args array index.', data3],
    {
      code: 0x2a,
      name: 'ArgumentIndexException',
      message: 'Bad args array index.',
      toString: 'ArgumentIndexException: Bad args array index.',
      valueOf: 42,
      cause: undefined,
      data: data3,
    },
  ],
] as const;
