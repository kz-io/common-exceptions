/**
 * This file contains test fixtures for the RangeException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  InvalidException,
  RangeException as _RangeException,
  ValueException,
} from '../../mod.ts';

export const RangeException = _RangeException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A numeric value is out of range.',
      toString: 'RangeException: A numeric value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['A range value is out of range.'],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A range value is out of range.',
      toString: 'RangeException: A range value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A numeric value is out of range.',
      toString: 'RangeException: A numeric value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { value: 3 };
const data2 = { valueName: 'index' };
const data3 = { lowerBound: 4 };
const data4 = { upperBound: 10 };
const data5 = { ...data1, ...data2 };
const data6 = { ...data1, ...data3 };
const data7 = { ...data1, ...data4 };
const data8 = { ...data2, ...data3 };
const data9 = { ...data2, ...data4 };
const data10 = { ...data3, ...data4 };
const data11 = { ...data1, ...data2, ...data3 };
const data12 = { ...data1, ...data2, ...data4 };
const data13 = { ...data1, ...data3, ...data4 };
const data14 = { ...data2, ...data3, ...data4 };
const data15 = { ...data1, ...data2, ...data3, ...data4 };

export const fixturesNewData = [
  [
    [data0],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A numeric value is out of range.',
      toString: 'RangeException: A numeric value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data1],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A numeric value, 3, is out of range.',
      toString: 'RangeException: A numeric value, 3, is out of range.',
      valueOf: 40,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data2],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'The numeric value of index is out of range.',
      toString: 'RangeException: The numeric value of index is out of range.',
      valueOf: 40,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'A numeric value is out of range. It must be greater-than, or equal to, 4.',
      toString:
        'RangeException: A numeric value is out of range. It must be greater-than, or equal to, 4.',
      valueOf: 40,
      cause: undefined,
      data: data3,
    },
  ],
  [
    [data4],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'A numeric value is out of range. It must be less-than, or equal to, 10.',
      toString:
        'RangeException: A numeric value is out of range. It must be less-than, or equal to, 10.',
      valueOf: 40,
      cause: undefined,
      data: data4,
    },
  ],
  [
    [data5],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'The numeric value, 3, of index is out of range.',
      toString:
        'RangeException: The numeric value, 3, of index is out of range.',
      valueOf: 40,
      cause: undefined,
      data: data5,
    },
  ],
  [
    [data6],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'A numeric value, 3, is out of range. It must be greater-than, or equal to, 4.',
      toString:
        'RangeException: A numeric value, 3, is out of range. It must be greater-than, or equal to, 4.',
      valueOf: 40,
      cause: undefined,
      data: data6,
    },
  ],
  [
    [data7],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'A numeric value, 3, is out of range. It must be less-than, or equal to, 10.',
      toString:
        'RangeException: A numeric value, 3, is out of range. It must be less-than, or equal to, 10.',
      valueOf: 40,
      cause: undefined,
      data: data7,
    },
  ],
  [
    [data8],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'The numeric value of index is out of range. It must be greater-than, or equal to, 4.',
      toString:
        'RangeException: The numeric value of index is out of range. It must be greater-than, or equal to, 4.',
      valueOf: 40,
      cause: undefined,
      data: data8,
    },
  ],
  [
    [data9],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'The numeric value of index is out of range. It must be less-than, or equal to, 10.',
      toString:
        'RangeException: The numeric value of index is out of range. It must be less-than, or equal to, 10.',
      valueOf: 40,
      cause: undefined,
      data: data9,
    },
  ],
  [
    [data10],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'A numeric value is out of range. It must be between 4 and 10, inclusive.',
      toString:
        'RangeException: A numeric value is out of range. It must be between 4 and 10, inclusive.',
      valueOf: 40,
      cause: undefined,
      data: data10,
    },
  ],
  [
    [data11],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'The numeric value, 3, of index is out of range. It must be greater-than, or equal to, 4.',
      toString:
        'RangeException: The numeric value, 3, of index is out of range. It must be greater-than, or equal to, 4.',
      valueOf: 40,
      cause: undefined,
      data: data11,
    },
  ],
  [
    [data12],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'The numeric value, 3, of index is out of range. It must be less-than, or equal to, 10.',
      toString:
        'RangeException: The numeric value, 3, of index is out of range. It must be less-than, or equal to, 10.',
      valueOf: 40,
      cause: undefined,
      data: data12,
    },
  ],
  [
    [data13],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'A numeric value, 3, is out of range. It must be between 4 and 10, inclusive.',
      toString:
        'RangeException: A numeric value, 3, is out of range. It must be between 4 and 10, inclusive.',
      valueOf: 40,
      cause: undefined,
      data: data13,
    },
  ],
  [
    [data14],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'The numeric value of index is out of range. It must be between 4 and 10, inclusive.',
      toString:
        'RangeException: The numeric value of index is out of range. It must be between 4 and 10, inclusive.',
      valueOf: 40,
      cause: undefined,
      data: data14,
    },
  ],
  [
    [data15],
    {
      code: 0x28,
      name: 'RangeException',
      message:
        'The numeric value, 3, of index is out of range. It must be between 4 and 10, inclusive.',
      toString:
        'RangeException: The numeric value, 3, of index is out of range. It must be between 4 and 10, inclusive.',
      valueOf: 40,
      cause: undefined,
      data: data15,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['A range value is out of range.', data1],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A range value is out of range.',
      toString: 'RangeException: A range value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['A range value is out of range.', data0],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A range value is out of range.',
      toString: 'RangeException: A range value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['A range value is out of range.', data2],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A range value is out of range.',
      toString: 'RangeException: A range value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: data2,
    },
  ],
  [
    ['A range value is out of range.', data3],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A range value is out of range.',
      toString: 'RangeException: A range value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: data3,
    },
  ],
  [
    ['A range value is out of range.', data0],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A range value is out of range.',
      toString: 'RangeException: A range value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['A range value is out of range.', data1],
    {
      code: 0x28,
      name: 'RangeException',
      message: 'A range value is out of range.',
      toString: 'RangeException: A range value is out of range.',
      valueOf: 40,
      cause: undefined,
      data: data1,
    },
  ],
] as const;
