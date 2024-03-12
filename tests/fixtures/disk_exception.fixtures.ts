/**
 * This file contains test fixtures for the DiskException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  DiskException as _DiskException,
  Exception,
  OSException,
} from '../../mod.ts';

export const DiskException = _DiskException;

export const fixtureInheritance = [
  Error,
  Exception,
  OSException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test OS disk exception.'],
    {
      code: 0x3,
      name: 'DiskException',
      message: 'This is a test OS disk exception.',
      toString: 'DiskException: This is a test OS disk exception.',
      valueOf: 3,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test OS disk exception.'],
    {
      code: 0x3,
      name: 'DiskException',
      message: 'This is another test OS disk exception.',
      toString: 'DiskException: This is another test OS disk exception.',
      valueOf: 3,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test exception.', {}],
    {
      code: 0x3,
      name: 'DiskException',
      message: 'This is a test exception.',
      toString: 'DiskException: This is a test exception.',
      valueOf: 3,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test exception.', { os: 'linux' }],
    {
      code: 0x3,
      name: 'DiskException',
      message: 'This is a test exception.',
      toString: 'DiskException: This is a test exception.',
      valueOf: 3,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android' }],
    {
      code: 0x3,
      name: 'DiskException',
      message: 'This is a test exception.',
      toString: 'DiskException: This is a test exception.',
      valueOf: 3,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test exception.', { errorCode: 'EPERM' }],
    {
      code: 0x3,
      name: 'DiskException',
      message: 'This is a test exception.',
      toString: 'DiskException: This is a test exception.',
      valueOf: 3,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android', errorCode: 'EPERM' }],
    {
      code: 0x3,
      name: 'DiskException',
      message: 'This is a test exception.',
      toString: 'DiskException: This is a test exception.',
      valueOf: 3,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x3,
      name: 'DiskException',
      message: 'This is a test exception.',
      toString: 'DiskException: This is a test exception.',
      valueOf: 3,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
