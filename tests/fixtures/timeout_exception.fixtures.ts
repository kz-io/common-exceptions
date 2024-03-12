/**
 * This file contains test fixtures for the TimeoutException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  OperationException,
  TimeoutException as _TimeoutException,
} from '../../mod.ts';

export const TimeoutException = _TimeoutException;

export const fixtureInheritance = [
  Error,
  Exception,
  OperationException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation timed out.',
      toString: 'TimeoutException: An operation timed out.',
      valueOf: 20,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['The operation failed due to time out.'],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'The operation failed due to time out.',
      toString: 'TimeoutException: The operation failed due to time out.',
      valueOf: 20,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation timed out.',
      toString: 'TimeoutException: An operation timed out.',
      valueOf: 20,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { operationType: 'action' };
const data15 = { operationType: 'request' };
const data2 = { operationName: 'rename' };
const data3 = { operationTimeout: 500 };
const data4 = { ...data1, ...data2 };
const data5 = { ...data1, ...data3 };
const data6 = { ...data2, ...data3 };
const data7 = { ...data1, ...data2, ...data3 };
const data35 = { ...data15, ...data2 };
const data45 = { ...data15, ...data3 };
const data65 = { ...data2, ...data3 };
const data75 = { ...data15, ...data2, ...data3 };

export const fixturesNewData = [
  [
    [data0],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation timed out.',
      toString: 'TimeoutException: An operation timed out.',
      valueOf: 20,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data1],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An action timed out.',
      toString: 'TimeoutException: An action timed out.',
      valueOf: 20,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data15],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'A request timed out.',
      toString: 'TimeoutException: A request timed out.',
      valueOf: 20,
      cause: undefined,
      data: data15,
    },
  ],
  [
    [data2],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation, rename, timed out.',
      toString: 'TimeoutException: An operation, rename, timed out.',
      valueOf: 20,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation timed out after 500ms.',
      toString: 'TimeoutException: An operation timed out after 500ms.',
      valueOf: 20,
      cause: undefined,
      data: data3,
    },
  ],
  [
    [data4],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An action, rename, timed out.',
      toString: 'TimeoutException: An action, rename, timed out.',
      valueOf: 20,
      cause: undefined,
      data: data4,
    },
  ],
  [
    [data5],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An action timed out after 500ms.',
      toString: 'TimeoutException: An action timed out after 500ms.',
      valueOf: 20,
      cause: undefined,
      data: data5,
    },
  ],
  [
    [data6],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation, rename, timed out after 500ms.',
      toString:
        'TimeoutException: An operation, rename, timed out after 500ms.',
      valueOf: 20,
      cause: undefined,
      data: data6,
    },
  ],
  [
    [data7],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An action, rename, timed out after 500ms.',
      toString: 'TimeoutException: An action, rename, timed out after 500ms.',
      valueOf: 20,
      cause: undefined,
      data: data7,
    },
  ],
  [
    [data35],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'A request, rename, timed out.',
      toString: 'TimeoutException: A request, rename, timed out.',
      valueOf: 20,
      cause: undefined,
      data: data35,
    },
  ],
  [
    [data45],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'A request timed out after 500ms.',
      toString: 'TimeoutException: A request timed out after 500ms.',
      valueOf: 20,
      cause: undefined,
      data: data45,
    },
  ],
  [
    [data65],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation, rename, timed out after 500ms.',
      toString:
        'TimeoutException: An operation, rename, timed out after 500ms.',
      valueOf: 20,
      cause: undefined,
      data: data65,
    },
  ],
  [
    [data75],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'A request, rename, timed out after 500ms.',
      toString: 'TimeoutException: A request, rename, timed out after 500ms.',
      valueOf: 20,
      cause: undefined,
      data: data75,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['An operation failed after timing out.', data1],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation failed after timing out.',
      toString: 'TimeoutException: An operation failed after timing out.',
      valueOf: 20,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['An operation failed after timing out.', data0],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation failed after timing out.',
      toString: 'TimeoutException: An operation failed after timing out.',
      valueOf: 20,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['An operation ran too long and timed out.', data2],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation ran too long and timed out.',
      toString: 'TimeoutException: An operation ran too long and timed out.',
      valueOf: 20,
      cause: undefined,
      data: data2,
    },
  ],
  [
    ['An operation timed out and failed.', data3],
    {
      code: 0x14,
      name: 'TimeoutException',
      message: 'An operation timed out and failed.',
      toString: 'TimeoutException: An operation timed out and failed.',
      valueOf: 20,
      cause: undefined,
      data: data3,
    },
  ],
] as const;
