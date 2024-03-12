/**
 * This file contains test fixtures for the IterationException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  IterationException as _IterationException,
  OperationException,
} from '../../mod.ts';

export const IterationException = _IterationException;

export const fixtureInheritance = [
  Error,
  Exception,
  OperationException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation exceeded the maximum number of iterations.',
      toString:
        'IterationException: An operation exceeded the maximum number of iterations.',
      valueOf: 19,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['The operation failed due to infinite recursion.'],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'The operation failed due to infinite recursion.',
      toString:
        'IterationException: The operation failed due to infinite recursion.',
      valueOf: 19,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation exceeded the maximum number of iterations.',
      toString:
        'IterationException: An operation exceeded the maximum number of iterations.',
      valueOf: 19,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { operationType: 'action' };
const data15 = { operationType: 'request' };
const data2 = { operationName: 'rename' };
const data3 = { iterationCount: 4 };
const data4 = { ...data1, ...data2 };
const data5 = { ...data1, ...data3 };
const data6 = { ...data2, ...data3 };
const data7 = { ...data1, ...data2, ...data3 };
const data35 = { ...data15, ...data2 };
const data45 = { ...data15, ...data3 };
const data65 = { ...data2, ...data3 };
const data75 = { ...data15, ...data2, ...data3 };
const data85 = {
  operationType: 'request',
  operationName: 'rename',
  iterationCount: 1,
};
const data95 = {
  operationType: 'request',
  operationName: 'rename',
  iterationCount: 5,
  repeatingValues: true,
};

export const fixturesNewData = [
  [
    [data0],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation exceeded the maximum number of iterations.',
      toString:
        'IterationException: An operation exceeded the maximum number of iterations.',
      valueOf: 19,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data1],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An action exceeded the maximum number of iterations.',
      toString:
        'IterationException: An action exceeded the maximum number of iterations.',
      valueOf: 19,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data15],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'A request exceeded the maximum number of iterations.',
      toString:
        'IterationException: A request exceeded the maximum number of iterations.',
      valueOf: 19,
      cause: undefined,
      data: data15,
    },
  ],
  [
    [data2],
    {
      code: 0x13,
      name: 'IterationException',
      message:
        'An operation, rename, exceeded the maximum number of iterations.',
      toString:
        'IterationException: An operation, rename, exceeded the maximum number of iterations.',
      valueOf: 19,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation exceeded the maximum number of 4 iterations.',
      toString:
        'IterationException: An operation exceeded the maximum number of 4 iterations.',
      valueOf: 19,
      cause: undefined,
      data: data3,
    },
  ],
  [
    [data4],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An action, rename, exceeded the maximum number of iterations.',
      toString:
        'IterationException: An action, rename, exceeded the maximum number of iterations.',
      valueOf: 19,
      cause: undefined,
      data: data4,
    },
  ],
  [
    [data5],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An action exceeded the maximum number of 4 iterations.',
      toString:
        'IterationException: An action exceeded the maximum number of 4 iterations.',
      valueOf: 19,
      cause: undefined,
      data: data5,
    },
  ],
  [
    [data6],
    {
      code: 0x13,
      name: 'IterationException',
      message:
        'An operation, rename, exceeded the maximum number of 4 iterations.',
      toString:
        'IterationException: An operation, rename, exceeded the maximum number of 4 iterations.',
      valueOf: 19,
      cause: undefined,
      data: data6,
    },
  ],
  [
    [data7],
    {
      code: 0x13,
      name: 'IterationException',
      message:
        'An action, rename, exceeded the maximum number of 4 iterations.',
      toString:
        'IterationException: An action, rename, exceeded the maximum number of 4 iterations.',
      valueOf: 19,
      cause: undefined,
      data: data7,
    },
  ],
  [
    [data35],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'A request, rename, exceeded the maximum number of iterations.',
      toString:
        'IterationException: A request, rename, exceeded the maximum number of iterations.',
      valueOf: 19,
      cause: undefined,
      data: data35,
    },
  ],
  [
    [data45],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'A request exceeded the maximum number of 4 iterations.',
      toString:
        'IterationException: A request exceeded the maximum number of 4 iterations.',
      valueOf: 19,
      cause: undefined,
      data: data45,
    },
  ],
  [
    [data65],
    {
      code: 0x13,
      name: 'IterationException',
      message:
        'An operation, rename, exceeded the maximum number of 4 iterations.',
      toString:
        'IterationException: An operation, rename, exceeded the maximum number of 4 iterations.',
      valueOf: 19,
      cause: undefined,
      data: data65,
    },
  ],
  [
    [data75],
    {
      code: 0x13,
      name: 'IterationException',
      message:
        'A request, rename, exceeded the maximum number of 4 iterations.',
      toString:
        'IterationException: A request, rename, exceeded the maximum number of 4 iterations.',
      valueOf: 19,
      cause: undefined,
      data: data75,
    },
  ],
  [
    [data85],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'A request, rename, exceeded the maximum number of 1 iteration.',
      toString:
        'IterationException: A request, rename, exceeded the maximum number of 1 iteration.',
      valueOf: 19,
      cause: undefined,
      data: data85,
    },
  ],
  [
    [data95],
    {
      code: 0x13,
      name: 'IterationException',
      message:
        'A request, rename, exceeded the maximum number of 5 iterations on consecutive repeating values.',
      toString:
        'IterationException: A request, rename, exceeded the maximum number of 5 iterations on consecutive repeating values.',
      valueOf: 19,
      cause: undefined,
      data: data95,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['An operation failed after looping too much.', data1],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation failed after looping too much.',
      toString:
        'IterationException: An operation failed after looping too much.',
      valueOf: 19,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['An operation failed after looping too much.', data0],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation failed after looping too much.',
      toString:
        'IterationException: An operation failed after looping too much.',
      valueOf: 19,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['An operation looped too much and failed.', data2],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation looped too much and failed.',
      toString: 'IterationException: An operation looped too much and failed.',
      valueOf: 19,
      cause: undefined,
      data: data2,
    },
  ],
  [
    ['An operation encountered an infinite loop.', data3],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation encountered an infinite loop.',
      toString:
        'IterationException: An operation encountered an infinite loop.',
      valueOf: 19,
      cause: undefined,
      data: data3,
    },
  ],
  [
    ['An operation encountered an infinite loop.', data0],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation encountered an infinite loop.',
      toString:
        'IterationException: An operation encountered an infinite loop.',
      valueOf: 19,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['An operation encountered an infinite loop.', data1],
    {
      code: 0x13,
      name: 'IterationException',
      message: 'An operation encountered an infinite loop.',
      toString:
        'IterationException: An operation encountered an infinite loop.',
      valueOf: 19,
      cause: undefined,
      data: data1,
    },
  ],
] as const;
