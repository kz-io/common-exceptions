/**
 * This file contains test fixtures for the NotFoundException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  InvalidException,
  NotFoundException as _NotFoundException,
  ValueException,
} from '../../mod.ts';

export const NotFoundException = _NotFoundException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test not-found exception.'],
    {
      code: 0x2b,
      name: 'NotFoundException',
      message: 'This is a test not-found exception.',
      toString: 'NotFoundException: This is a test not-found exception.',
      valueOf: 43,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test not-found exception.'],
    {
      code: 0x2b,
      name: 'NotFoundException',
      message: 'This is another test not-found exception.',
      toString: 'NotFoundException: This is another test not-found exception.',
      valueOf: 43,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test not-found exception.', {}],
    {
      code: 0x2b,
      name: 'NotFoundException',
      message: 'This is a test not-found exception.',
      toString: 'NotFoundException: This is a test not-found exception.',
      valueOf: 43,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test not-found exception.', { os: 'linux' }],
    {
      code: 0x2b,
      name: 'NotFoundException',
      message: 'This is a test not-found exception.',
      toString: 'NotFoundException: This is a test not-found exception.',
      valueOf: 43,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test not-found exception.', { os: 'android' }],
    {
      code: 0x2b,
      name: 'NotFoundException',
      message: 'This is a test not-found exception.',
      toString: 'NotFoundException: This is a test not-found exception.',
      valueOf: 43,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test not-found exception.', { errorCode: 'EPERM' }],
    {
      code: 0x2b,
      name: 'NotFoundException',
      message: 'This is a test not-found exception.',
      toString: 'NotFoundException: This is a test not-found exception.',
      valueOf: 43,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test not-found exception.', {
      os: 'android',
      errorCode: 'EPERM',
    }],
    {
      code: 0x2b,
      name: 'NotFoundException',
      message: 'This is a test not-found exception.',
      toString: 'NotFoundException: This is a test not-found exception.',
      valueOf: 43,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test not-found exception.', {
      os: 'linux',
      errorCode: 'EPERM',
    }],
    {
      code: 0x2b,
      name: 'NotFoundException',
      message: 'This is a test not-found exception.',
      toString: 'NotFoundException: This is a test not-found exception.',
      valueOf: 43,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
