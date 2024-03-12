/**
 * This file contains test fixtures for the ConnectionException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  ConnectionException as _ConnectionException,
  Exception,
  OSException,
} from '../../mod.ts';

export const ConnectionException = _ConnectionException;

export const fixtureInheritance = [
  Error,
  Exception,
  OSException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test OS connection exception.'],
    {
      code: 0x5,
      name: 'ConnectionException',
      message: 'This is a test OS connection exception.',
      toString: 'ConnectionException: This is a test OS connection exception.',
      valueOf: 5,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test OS connection exception.'],
    {
      code: 0x5,
      name: 'ConnectionException',
      message: 'This is another test OS connection exception.',
      toString:
        'ConnectionException: This is another test OS connection exception.',
      valueOf: 5,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test exception.', {}],
    {
      code: 0x5,
      name: 'ConnectionException',
      message: 'This is a test exception.',
      toString: 'ConnectionException: This is a test exception.',
      valueOf: 5,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test exception.', { os: 'linux' }],
    {
      code: 0x5,
      name: 'ConnectionException',
      message: 'This is a test exception.',
      toString: 'ConnectionException: This is a test exception.',
      valueOf: 5,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android' }],
    {
      code: 0x5,
      name: 'ConnectionException',
      message: 'This is a test exception.',
      toString: 'ConnectionException: This is a test exception.',
      valueOf: 5,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test exception.', { errorCode: 'EPERM' }],
    {
      code: 0x5,
      name: 'ConnectionException',
      message: 'This is a test exception.',
      toString: 'ConnectionException: This is a test exception.',
      valueOf: 5,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android', errorCode: 'EPERM' }],
    {
      code: 0x5,
      name: 'ConnectionException',
      message: 'This is a test exception.',
      toString: 'ConnectionException: This is a test exception.',
      valueOf: 5,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x5,
      name: 'ConnectionException',
      message: 'This is a test exception.',
      toString: 'ConnectionException: This is a test exception.',
      valueOf: 5,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
