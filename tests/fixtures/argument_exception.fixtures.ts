/**
 * This file contains test fixtures for the ArgumentException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  ArgumentException as _ArgumentException,
  Exception,
  InvalidException,
  ValueException,
} from '../../mod.ts';

export const ArgumentException = _ArgumentException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x24,
      name: 'ArgumentException',
      message: 'An argument does not satisfy its constraints.',
      toString:
        'ArgumentException: An argument does not satisfy its constraints.',
      valueOf: 36,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['An argument has the correct type, but failed additional constraints.'],
    {
      code: 0x24,
      name: 'ArgumentException',
      message:
        'An argument has the correct type, but failed additional constraints.',
      toString:
        'ArgumentException: An argument has the correct type, but failed additional constraints.',
      valueOf: 36,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x24,
      name: 'ArgumentException',
      message: 'An argument does not satisfy its constraints.',
      toString:
        'ArgumentException: An argument does not satisfy its constraints.',
      valueOf: 36,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { argumentName: 'library' };
const data2 = { argumentConstraints: ['capitalized', 'or pascal case'] };
const data3 = { ...data1, ...data2 };

export const fixturesNewData = [
  [
    [data0],
    {
      code: 0x24,
      name: 'ArgumentException',
      message: 'An argument does not satisfy its constraints.',
      toString:
        'ArgumentException: An argument does not satisfy its constraints.',
      valueOf: 36,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data1],
    {
      code: 0x24,
      name: 'ArgumentException',
      message: 'An argument, library, does not satisfy its constraints.',
      toString:
        'ArgumentException: An argument, library, does not satisfy its constraints.',
      valueOf: 36,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data2],
    {
      code: 0x24,
      name: 'ArgumentException',
      message:
        'An argument does not satisfy the following constraints:\n- capitalized\n- or pascal case.',
      toString:
        'ArgumentException: An argument does not satisfy the following constraints:\n- capitalized\n- or pascal case.',
      valueOf: 36,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x24,
      name: 'ArgumentException',
      message:
        'An argument, library, does not satisfy the following constraints:\n- capitalized\n- or pascal case.',
      toString:
        'ArgumentException: An argument, library, does not satisfy the following constraints:\n- capitalized\n- or pascal case.',
      valueOf: 36,
      cause: undefined,
      data: data3,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    [
      'An argument has the correct type, but failed additional constraints.',
      data1,
    ],
    {
      code: 0x24,
      name: 'ArgumentException',
      message:
        'An argument has the correct type, but failed additional constraints.',
      toString:
        'ArgumentException: An argument has the correct type, but failed additional constraints.',
      valueOf: 36,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [
      'An argument has the correct type, but failed additional constraints.',
      data0,
    ],
    {
      code: 0x24,
      name: 'ArgumentException',
      message:
        'An argument has the correct type, but failed additional constraints.',
      toString:
        'ArgumentException: An argument has the correct type, but failed additional constraints.',
      valueOf: 36,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['Failed constraints on valid type.', data2],
    {
      code: 0x24,
      name: 'ArgumentException',
      message: 'Failed constraints on valid type.',
      toString: 'ArgumentException: Failed constraints on valid type.',
      valueOf: 36,
      cause: undefined,
      data: data2,
    },
  ],
  [
    ['Failed constraints on valid type.', data3],
    {
      code: 0x24,
      name: 'ArgumentException',
      message: 'Failed constraints on valid type.',
      toString: 'ArgumentException: Failed constraints on valid type.',
      valueOf: 36,
      cause: undefined,
      data: data3,
    },
  ],
] as const;
