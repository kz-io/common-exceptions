/**
 * This file contains test fixtures for the AssertionException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  AssertionException as _AssertionException,
  Exception,
  InvalidException,
  ValueException,
} from '../../mod.ts';

export const AssertionException = _AssertionException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test assertion exception.'],
    {
      code: 0x24,
      name: 'AssertionException',
      message: 'This is a test assertion exception.',
      toString: 'AssertionException: This is a test assertion exception.',
      valueOf: 36,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test assertion exception.'],
    {
      code: 0x24,
      name: 'AssertionException',
      message: 'This is another test assertion exception.',
      toString: 'AssertionException: This is another test assertion exception.',
      valueOf: 36,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test assertion exception.', {}],
    {
      code: 0x24,
      name: 'AssertionException',
      message: 'This is a test assertion exception.',
      toString: 'AssertionException: This is a test assertion exception.',
      valueOf: 36,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test assertion exception.', { os: 'linux' }],
    {
      code: 0x24,
      name: 'AssertionException',
      message: 'This is a test assertion exception.',
      toString: 'AssertionException: This is a test assertion exception.',
      valueOf: 36,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test assertion exception.', { os: 'android' }],
    {
      code: 0x24,
      name: 'AssertionException',
      message: 'This is a test assertion exception.',
      toString: 'AssertionException: This is a test assertion exception.',
      valueOf: 36,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test assertion exception.', { errorCode: 'EPERM' }],
    {
      code: 0x24,
      name: 'AssertionException',
      message: 'This is a test assertion exception.',
      toString: 'AssertionException: This is a test assertion exception.',
      valueOf: 36,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test assertion exception.', {
      os: 'android',
      errorCode: 'EPERM',
    }],
    {
      code: 0x24,
      name: 'AssertionException',
      message: 'This is a test assertion exception.',
      toString: 'AssertionException: This is a test assertion exception.',
      valueOf: 36,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test assertion exception.', {
      os: 'linux',
      errorCode: 'EPERM',
    }],
    {
      code: 0x24,
      name: 'AssertionException',
      message: 'This is a test assertion exception.',
      toString: 'AssertionException: This is a test assertion exception.',
      valueOf: 36,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
