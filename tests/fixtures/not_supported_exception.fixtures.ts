/**
 * This file contains test fixtures for the NotSupportedException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  InvalidException,
  NotSupportedException as _NotSupportedException,
} from '../../mod.ts';

export const NotSupportedException = _NotSupportedException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test not-supported exception.'],
    {
      code: 0x21,
      name: 'NotSupportedException',
      message: 'This is a test not-supported exception.',
      toString:
        'NotSupportedException: This is a test not-supported exception.',
      valueOf: 33,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test not-supported exception.'],
    {
      code: 0x21,
      name: 'NotSupportedException',
      message: 'This is another test not-supported exception.',
      toString:
        'NotSupportedException: This is another test not-supported exception.',
      valueOf: 33,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test not-supported exception.', {}],
    {
      code: 0x21,
      name: 'NotSupportedException',
      message: 'This is a test not-supported exception.',
      toString:
        'NotSupportedException: This is a test not-supported exception.',
      valueOf: 33,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test not-supported exception.', { os: 'linux' }],
    {
      code: 0x21,
      name: 'NotSupportedException',
      message: 'This is a test not-supported exception.',
      toString:
        'NotSupportedException: This is a test not-supported exception.',
      valueOf: 33,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test not-supported exception.', { os: 'android' }],
    {
      code: 0x21,
      name: 'NotSupportedException',
      message: 'This is a test not-supported exception.',
      toString:
        'NotSupportedException: This is a test not-supported exception.',
      valueOf: 33,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test not-supported exception.', { errorCode: 'EPERM' }],
    {
      code: 0x21,
      name: 'NotSupportedException',
      message: 'This is a test not-supported exception.',
      toString:
        'NotSupportedException: This is a test not-supported exception.',
      valueOf: 33,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test not-supported exception.', {
      os: 'android',
      errorCode: 'EPERM',
    }],
    {
      code: 0x21,
      name: 'NotSupportedException',
      message: 'This is a test not-supported exception.',
      toString:
        'NotSupportedException: This is a test not-supported exception.',
      valueOf: 33,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test not-supported exception.', {
      os: 'linux',
      errorCode: 'EPERM',
    }],
    {
      code: 0x21,
      name: 'NotSupportedException',
      message: 'This is a test not-supported exception.',
      toString:
        'NotSupportedException: This is a test not-supported exception.',
      valueOf: 33,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
