/**
 * This file contains test fixtures for the ExternalException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  ExternalException as _ExternalException,
  OperationException,
} from '../../mod.ts';

export const ExternalException = _ExternalException;

export const fixtureInheritance = [
  Error,
  Exception,
  OperationException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'An external codebase raised an exception.',
      toString: 'ExternalException: An external codebase raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['The external codebase raised an exception.'],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'The external codebase raised an exception.',
      toString: 'ExternalException: The external codebase raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'An external codebase raised an exception.',
      toString: 'ExternalException: An external codebase raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { externalType: 'library' };
const data2 = { externalName: 'testLibrary' };
const data3 = { ...data1, ...data2 };

export const fixturesNewData = [
  [
    [data1],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'An external library raised an exception.',
      toString: 'ExternalException: An external library raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data0],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'An external codebase raised an exception.',
      toString: 'ExternalException: An external codebase raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data2],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'An external codebase, testLibrary, raised an exception.',
      toString:
        'ExternalException: An external codebase, testLibrary, raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'An external library, testLibrary, raised an exception.',
      toString:
        'ExternalException: An external library, testLibrary, raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: data3,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['The external codebase raised an exception.', data1],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'The external codebase raised an exception.',
      toString: 'ExternalException: The external codebase raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['The external codebase raised an exception.', data0],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'The external codebase raised an exception.',
      toString: 'ExternalException: The external codebase raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['The external codebase testLibrary raised an exception.', data2],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'The external codebase testLibrary raised an exception.',
      toString:
        'ExternalException: The external codebase testLibrary raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: data2,
    },
  ],
  [
    ['The external library testLibrary raised an exception.', data3],
    {
      code: 0x11,
      name: 'ExternalException',
      message: 'The external library testLibrary raised an exception.',
      toString:
        'ExternalException: The external library testLibrary raised an exception.',
      valueOf: 17,
      cause: undefined,
      data: data3,
    },
  ],
] as const;
