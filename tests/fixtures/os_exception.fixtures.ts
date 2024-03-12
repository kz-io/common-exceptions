/**
 * This file contains test fixtures for the OSException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { Exception, OSException as _OSException } from '../../mod.ts';

export const OSException = _OSException;

export const fixtureInheritance = [
  Error,
  Exception,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test OS exception.'],
    {
      code: 0x1,
      name: 'OSException',
      message: 'This is a test OS exception.',
      toString: 'OSException: This is a test OS exception.',
      valueOf: 1,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test OS exception.'],
    {
      code: 0x1,
      name: 'OSException',
      message: 'This is another test OS exception.',
      toString: 'OSException: This is another test OS exception.',
      valueOf: 1,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test exception.', {}],
    {
      code: 0x1,
      name: 'OSException',
      message: 'This is a test exception.',
      toString: 'OSException: This is a test exception.',
      valueOf: 1,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test exception.', { os: 'linux' }],
    {
      code: 0x1,
      name: 'OSException',
      message: 'This is a test exception.',
      toString: 'OSException: This is a test exception.',
      valueOf: 1,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android' }],
    {
      code: 0x1,
      name: 'OSException',
      message: 'This is a test exception.',
      toString: 'OSException: This is a test exception.',
      valueOf: 1,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test exception.', { errorCode: 'EPERM' }],
    {
      code: 0x1,
      name: 'OSException',
      message: 'This is a test exception.',
      toString: 'OSException: This is a test exception.',
      valueOf: 1,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android', errorCode: 'EPERM' }],
    {
      code: 0x1,
      name: 'OSException',
      message: 'This is a test exception.',
      toString: 'OSException: This is a test exception.',
      valueOf: 1,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x1,
      name: 'OSException',
      message: 'This is a test exception.',
      toString: 'OSException: This is a test exception.',
      valueOf: 1,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
