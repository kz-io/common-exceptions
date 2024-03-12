/**
 * This file contains test fixtures for the IndexException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  IndexException as _IndexException,
  InvalidException,
  RangeException,
  ValueException,
} from '../../mod.ts';

export const IndexException = _IndexException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
  RangeException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x29,
      name: 'IndexException',
      message: 'An index is outside the bounds of an array.',
      toString: 'IndexException: An index is outside the bounds of an array.',
      valueOf: 41,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['The index 15 is outside the bounds of an array.'],
    {
      code: 0x29,
      name: 'IndexException',
      message: 'The index 15 is outside the bounds of an array.',
      toString:
        'IndexException: The index 15 is outside the bounds of an array.',
      valueOf: 41,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x29,
      name: 'IndexException',
      message: 'An index is outside the bounds of an array.',
      toString: 'IndexException: An index is outside the bounds of an array.',
      valueOf: 41,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { index: 20 };
const data2 = { valueName: 'list' };
const data3 = { upperBound: 10 };
const data4 = { ...data1, ...data2, ...data3 };
const data5 = { ...data2, ...data3 };
const data6 = { ...data1, ...data3 };
const data7 = { ...data1, ...data2 };

export const fixturesNewData = [
  [
    [data1],
    {
      code: 0x29,
      name: 'IndexException',
      message: 'An index, 20, is outside the bounds of an array.',
      toString:
        'IndexException: An index, 20, is outside the bounds of an array.',
      valueOf: 41,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data0],
    {
      code: 0x29,
      name: 'IndexException',
      message: 'An index is outside the bounds of an array.',
      toString: 'IndexException: An index is outside the bounds of an array.',
      valueOf: 41,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data2],
    {
      code: 0x29,
      name: 'IndexException',
      message: 'An index is outside the bounds of an array, list.',
      toString:
        'IndexException: An index is outside the bounds of an array, list.',
      valueOf: 41,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x29,
      name: 'IndexException',
      message:
        'An index is outside the bounds of an array. It must be between 0 and 10, inclusive.',
      toString:
        'IndexException: An index is outside the bounds of an array. It must be between 0 and 10, inclusive.',
      valueOf: 41,
      cause: undefined,
      data: data3,
    },
  ],
  [
    [data4],
    {
      code: 0x29,
      name: 'IndexException',
      message:
        'An index, 20, is outside the bounds of an array, list. It must be between 0 and 10, inclusive.',
      toString:
        'IndexException: An index, 20, is outside the bounds of an array, list. It must be between 0 and 10, inclusive.',
      valueOf: 41,
      cause: undefined,
      data: data4,
    },
  ],
  [
    [data5],
    {
      code: 0x29,
      name: 'IndexException',
      message:
        'An index is outside the bounds of an array, list. It must be between 0 and 10, inclusive.',
      toString:
        'IndexException: An index is outside the bounds of an array, list. It must be between 0 and 10, inclusive.',
      valueOf: 41,
      cause: undefined,
      data: data5,
    },
  ],
  [
    [data6],
    {
      code: 0x29,
      name: 'IndexException',
      message:
        'An index, 20, is outside the bounds of an array. It must be between 0 and 10, inclusive.',
      toString:
        'IndexException: An index, 20, is outside the bounds of an array. It must be between 0 and 10, inclusive.',
      valueOf: 41,
      cause: undefined,
      data: data6,
    },
  ],
  [
    [data7],
    {
      code: 0x29,
      name: 'IndexException',
      message: 'An index, 20, is outside the bounds of an array, list.',
      toString:
        'IndexException: An index, 20, is outside the bounds of an array, list.',
      valueOf: 41,
      cause: undefined,
      data: data7,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['The index 15 is outside the bounds of an array.', data1],
    {
      code: 0x29,
      name: 'IndexException',
      message: 'The index 15 is outside the bounds of an array.',
      toString:
        'IndexException: The index 15 is outside the bounds of an array.',
      valueOf: 41,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['The index 15 is outside the bounds of an array.', data0],
    {
      code: 0x29,
      name: 'IndexException',
      message: 'The index 15 is outside the bounds of an array.',
      toString:
        'IndexException: The index 15 is outside the bounds of an array.',
      valueOf: 41,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;
