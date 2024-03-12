/**
 * This file contains test fixtures for the ValueException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  InvalidException,
  ValueException as _ValueException,
} from '../../mod.ts';

export const ValueException = _ValueException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test value exception.'],
    {
      code: 0x23,
      name: 'ValueException',
      message: 'This is a test value exception.',
      toString: 'ValueException: This is a test value exception.',
      valueOf: 35,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test value exception.'],
    {
      code: 0x23,
      name: 'ValueException',
      message: 'This is another test value exception.',
      toString: 'ValueException: This is another test value exception.',
      valueOf: 35,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test value exception.', {}],
    {
      code: 0x23,
      name: 'ValueException',
      message: 'This is a test value exception.',
      toString: 'ValueException: This is a test value exception.',
      valueOf: 35,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test value exception.', { os: 'linux' }],
    {
      code: 0x23,
      name: 'ValueException',
      message: 'This is a test value exception.',
      toString: 'ValueException: This is a test value exception.',
      valueOf: 35,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test value exception.', { os: 'android' }],
    {
      code: 0x23,
      name: 'ValueException',
      message: 'This is a test value exception.',
      toString: 'ValueException: This is a test value exception.',
      valueOf: 35,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test value exception.', { errorCode: 'EPERM' }],
    {
      code: 0x23,
      name: 'ValueException',
      message: 'This is a test value exception.',
      toString: 'ValueException: This is a test value exception.',
      valueOf: 35,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test value exception.', { os: 'android', errorCode: 'EPERM' }],
    {
      code: 0x23,
      name: 'ValueException',
      message: 'This is a test value exception.',
      toString: 'ValueException: This is a test value exception.',
      valueOf: 35,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test value exception.', { os: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x23,
      name: 'ValueException',
      message: 'This is a test value exception.',
      toString: 'ValueException: This is a test value exception.',
      valueOf: 35,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
