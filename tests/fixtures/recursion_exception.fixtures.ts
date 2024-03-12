/**
 * This file contains test fixtures for the RecursionException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  OperationException,
  RecursionException as _RecursionException,
} from '../../mod.ts';

export const RecursionException = _RecursionException;

export const fixtureInheritance = [
  Error,
  Exception,
  OperationException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An operation exceeded maximum recursion depth.',
      toString:
        'RecursionException: An operation exceeded maximum recursion depth.',
      valueOf: 18,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['The operation failed due to infinite recursion.'],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'The operation failed due to infinite recursion.',
      toString:
        'RecursionException: The operation failed due to infinite recursion.',
      valueOf: 18,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An operation exceeded maximum recursion depth.',
      toString:
        'RecursionException: An operation exceeded maximum recursion depth.',
      valueOf: 18,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { operationType: 'action' };
const data15 = { operationType: 'request' };
const data2 = { operationName: 'rename' };
const data3 = { recursionDepth: 4 };
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
  recursionDepth: 1,
};

export const fixturesNewData = [
  [
    [data0],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An operation exceeded maximum recursion depth.',
      toString:
        'RecursionException: An operation exceeded maximum recursion depth.',
      valueOf: 18,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data1],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An action exceeded maximum recursion depth.',
      toString:
        'RecursionException: An action exceeded maximum recursion depth.',
      valueOf: 18,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data15],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'A request exceeded maximum recursion depth.',
      toString:
        'RecursionException: A request exceeded maximum recursion depth.',
      valueOf: 18,
      cause: undefined,
      data: data15,
    },
  ],
  [
    [data2],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An operation, rename, exceeded maximum recursion depth.',
      toString:
        'RecursionException: An operation, rename, exceeded maximum recursion depth.',
      valueOf: 18,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An operation exceeded maximum recursion depth of 4 levels.',
      toString:
        'RecursionException: An operation exceeded maximum recursion depth of 4 levels.',
      valueOf: 18,
      cause: undefined,
      data: data3,
    },
  ],
  [
    [data4],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An action, rename, exceeded maximum recursion depth.',
      toString:
        'RecursionException: An action, rename, exceeded maximum recursion depth.',
      valueOf: 18,
      cause: undefined,
      data: data4,
    },
  ],
  [
    [data5],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An action exceeded maximum recursion depth of 4 levels.',
      toString:
        'RecursionException: An action exceeded maximum recursion depth of 4 levels.',
      valueOf: 18,
      cause: undefined,
      data: data5,
    },
  ],
  [
    [data6],
    {
      code: 0x12,
      name: 'RecursionException',
      message:
        'An operation, rename, exceeded maximum recursion depth of 4 levels.',
      toString:
        'RecursionException: An operation, rename, exceeded maximum recursion depth of 4 levels.',
      valueOf: 18,
      cause: undefined,
      data: data6,
    },
  ],
  [
    [data7],
    {
      code: 0x12,
      name: 'RecursionException',
      message:
        'An action, rename, exceeded maximum recursion depth of 4 levels.',
      toString:
        'RecursionException: An action, rename, exceeded maximum recursion depth of 4 levels.',
      valueOf: 18,
      cause: undefined,
      data: data7,
    },
  ],
  [
    [data35],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'A request, rename, exceeded maximum recursion depth.',
      toString:
        'RecursionException: A request, rename, exceeded maximum recursion depth.',
      valueOf: 18,
      cause: undefined,
      data: data35,
    },
  ],
  [
    [data45],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'A request exceeded maximum recursion depth of 4 levels.',
      toString:
        'RecursionException: A request exceeded maximum recursion depth of 4 levels.',
      valueOf: 18,
      cause: undefined,
      data: data45,
    },
  ],
  [
    [data65],
    {
      code: 0x12,
      name: 'RecursionException',
      message:
        'An operation, rename, exceeded maximum recursion depth of 4 levels.',
      toString:
        'RecursionException: An operation, rename, exceeded maximum recursion depth of 4 levels.',
      valueOf: 18,
      cause: undefined,
      data: data65,
    },
  ],
  [
    [data75],
    {
      code: 0x12,
      name: 'RecursionException',
      message:
        'A request, rename, exceeded maximum recursion depth of 4 levels.',
      toString:
        'RecursionException: A request, rename, exceeded maximum recursion depth of 4 levels.',
      valueOf: 18,
      cause: undefined,
      data: data75,
    },
  ],
  [
    [data85],
    {
      code: 0x12,
      name: 'RecursionException',
      message:
        'A request, rename, exceeded maximum recursion depth of 1 level.',
      toString:
        'RecursionException: A request, rename, exceeded maximum recursion depth of 1 level.',
      valueOf: 18,
      cause: undefined,
      data: data85,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['An operation failed after recursing too much.', data1],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An operation failed after recursing too much.',
      toString:
        'RecursionException: An operation failed after recursing too much.',
      valueOf: 18,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['An operation failed after recursing too much.', data0],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An operation failed after recursing too much.',
      toString:
        'RecursionException: An operation failed after recursing too much.',
      valueOf: 18,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['An operation recursed too much and failed.', data2],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An operation recursed too much and failed.',
      toString:
        'RecursionException: An operation recursed too much and failed.',
      valueOf: 18,
      cause: undefined,
      data: data2,
    },
  ],
  [
    ['An operation encountered an infinite loop.', data3],
    {
      code: 0x12,
      name: 'RecursionException',
      message: 'An operation encountered an infinite loop.',
      toString:
        'RecursionException: An operation encountered an infinite loop.',
      valueOf: 18,
      cause: undefined,
      data: data3,
    },
  ],
] as const;
