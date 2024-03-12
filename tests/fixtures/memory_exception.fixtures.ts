/**
 * This file contains test fixtures for the MemoryException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  MemoryException as _MemoryException,
  OSException,
} from '../../mod.ts';

export const MemoryException = _MemoryException;

export const fixtureInheritance = [
  Error,
  Exception,
  OSException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test OS memory exception.'],
    {
      code: 0x2,
      name: 'MemoryException',
      message: 'This is a test OS memory exception.',
      toString: 'MemoryException: This is a test OS memory exception.',
      valueOf: 2,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test OS memory exception.'],
    {
      code: 0x2,
      name: 'MemoryException',
      message: 'This is another test OS memory exception.',
      toString: 'MemoryException: This is another test OS memory exception.',
      valueOf: 2,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test exception.', {}],
    {
      code: 0x2,
      name: 'MemoryException',
      message: 'This is a test exception.',
      toString: 'MemoryException: This is a test exception.',
      valueOf: 2,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test exception.', { os: 'linux' }],
    {
      code: 0x2,
      name: 'MemoryException',
      message: 'This is a test exception.',
      toString: 'MemoryException: This is a test exception.',
      valueOf: 2,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android' }],
    {
      code: 0x2,
      name: 'MemoryException',
      message: 'This is a test exception.',
      toString: 'MemoryException: This is a test exception.',
      valueOf: 2,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test exception.', { errorCode: 'EPERM' }],
    {
      code: 0x2,
      name: 'MemoryException',
      message: 'This is a test exception.',
      toString: 'MemoryException: This is a test exception.',
      valueOf: 2,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android', errorCode: 'EPERM' }],
    {
      code: 0x2,
      name: 'MemoryException',
      message: 'This is a test exception.',
      toString: 'MemoryException: This is a test exception.',
      valueOf: 2,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x2,
      name: 'MemoryException',
      message: 'This is a test exception.',
      toString: 'MemoryException: This is a test exception.',
      valueOf: 2,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
