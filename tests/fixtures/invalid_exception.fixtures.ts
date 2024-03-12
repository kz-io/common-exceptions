/**
 * This file contains test fixtures for the InvalidException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { Exception, InvalidException as _InvalidException } from '../../mod.ts';

export const InvalidException = _InvalidException;

export const fixtureInheritance = [
  Error,
  Exception,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test invalid exception.'],
    {
      code: 0x20,
      name: 'InvalidException',
      message: 'This is a test invalid exception.',
      toString: 'InvalidException: This is a test invalid exception.',
      valueOf: 32,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test invalid exception.'],
    {
      code: 0x20,
      name: 'InvalidException',
      message: 'This is another test invalid exception.',
      toString: 'InvalidException: This is another test invalid exception.',
      valueOf: 32,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test invalid exception.', {}],
    {
      code: 0x20,
      name: 'InvalidException',
      message: 'This is a test invalid exception.',
      toString: 'InvalidException: This is a test invalid exception.',
      valueOf: 32,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test invalid exception.', { os: 'linux' }],
    {
      code: 0x20,
      name: 'InvalidException',
      message: 'This is a test invalid exception.',
      toString: 'InvalidException: This is a test invalid exception.',
      valueOf: 32,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test invalid exception.', { os: 'android' }],
    {
      code: 0x20,
      name: 'InvalidException',
      message: 'This is a test invalid exception.',
      toString: 'InvalidException: This is a test invalid exception.',
      valueOf: 32,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test invalid exception.', { errorCode: 'EPERM' }],
    {
      code: 0x20,
      name: 'InvalidException',
      message: 'This is a test invalid exception.',
      toString: 'InvalidException: This is a test invalid exception.',
      valueOf: 32,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test invalid exception.', {
      os: 'android',
      errorCode: 'EPERM',
    }],
    {
      code: 0x20,
      name: 'InvalidException',
      message: 'This is a test invalid exception.',
      toString: 'InvalidException: This is a test invalid exception.',
      valueOf: 32,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test invalid exception.', { os: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x20,
      name: 'InvalidException',
      message: 'This is a test invalid exception.',
      toString: 'InvalidException: This is a test invalid exception.',
      valueOf: 32,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
