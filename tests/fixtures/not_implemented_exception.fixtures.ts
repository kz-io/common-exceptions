/**
 * This file contains test fixtures for the NotImplementedException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  InvalidException,
  NotImplementedException as _NotImplementedException,
} from '../../mod.ts';

export const NotImplementedException = _NotImplementedException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x22,
      name: 'NotImplementedException',
      message: 'A class method is not implemented.',
      toString: 'NotImplementedException: A class method is not implemented.',
      valueOf: 34,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['The getAction method is not implemented.'],
    {
      code: 0x22,
      name: 'NotImplementedException',
      message: 'The getAction method is not implemented.',
      toString:
        'NotImplementedException: The getAction method is not implemented.',
      valueOf: 34,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x22,
      name: 'NotImplementedException',
      message: 'A class method is not implemented.',
      toString: 'NotImplementedException: A class method is not implemented.',
      valueOf: 34,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { methodName: 'getAction' };

export const fixturesNewData = [
  [
    [data1],
    {
      code: 0x22,
      name: 'NotImplementedException',
      message: 'A class method, getAction, is not implemented.',
      toString:
        'NotImplementedException: A class method, getAction, is not implemented.',
      valueOf: 34,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data0],
    {
      code: 0x22,
      name: 'NotImplementedException',
      message: 'A class method is not implemented.',
      toString: 'NotImplementedException: A class method is not implemented.',
      valueOf: 34,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['The getAction method is not implemented.', data1],
    {
      code: 0x22,
      name: 'NotImplementedException',
      message: 'The getAction method is not implemented.',
      toString:
        'NotImplementedException: The getAction method is not implemented.',
      valueOf: 34,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['The getAction method is not implemented.', data0],
    {
      code: 0x22,
      name: 'NotImplementedException',
      message: 'The getAction method is not implemented.',
      toString:
        'NotImplementedException: The getAction method is not implemented.',
      valueOf: 34,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;
