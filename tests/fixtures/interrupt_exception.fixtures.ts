/**
 * This file contains test fixtures for the InterruptException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  InterruptException as _InterruptException,
  OSException,
} from '../../mod.ts';

export const InterruptException = _InterruptException;

export const fixtureInheritance = [
  Error,
  Exception,
  OSException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test OS interrupt exception.'],
    {
      code: 0x6,
      name: 'InterruptException',
      message: 'This is a test OS interrupt exception.',
      toString: 'InterruptException: This is a test OS interrupt exception.',
      valueOf: 6,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test OS interrupt exception.'],
    {
      code: 0x6,
      name: 'InterruptException',
      message: 'This is another test OS interrupt exception.',
      toString:
        'InterruptException: This is another test OS interrupt exception.',
      valueOf: 6,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test exception.', {}],
    {
      code: 0x6,
      name: 'InterruptException',
      message: 'This is a test exception.',
      toString: 'InterruptException: This is a test exception.',
      valueOf: 6,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test exception.', { os: 'linux' }],
    {
      code: 0x6,
      name: 'InterruptException',
      message: 'This is a test exception.',
      toString: 'InterruptException: This is a test exception.',
      valueOf: 6,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android' }],
    {
      code: 0x6,
      name: 'InterruptException',
      message: 'This is a test exception.',
      toString: 'InterruptException: This is a test exception.',
      valueOf: 6,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test exception.', { errorCode: 'EPERM' }],
    {
      code: 0x6,
      name: 'InterruptException',
      message: 'This is a test exception.',
      toString: 'InterruptException: This is a test exception.',
      valueOf: 6,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android', errorCode: 'EPERM' }],
    {
      code: 0x6,
      name: 'InterruptException',
      message: 'This is a test exception.',
      toString: 'InterruptException: This is a test exception.',
      valueOf: 6,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x6,
      name: 'InterruptException',
      message: 'This is a test exception.',
      toString: 'InterruptException: This is a test exception.',
      valueOf: 6,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
