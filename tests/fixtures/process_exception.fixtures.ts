/**
 * This file contains test fixtures for the ProcessException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  OSException,
  ProcessException as _ProcessException,
} from '../../mod.ts';

export const ProcessException = _ProcessException;

export const fixtureInheritance = [
  Error,
  Exception,
  OSException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test OS process exception.'],
    {
      code: 0x4,
      name: 'ProcessException',
      message: 'This is a test OS process exception.',
      toString: 'ProcessException: This is a test OS process exception.',
      valueOf: 4,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test OS process exception.'],
    {
      code: 0x4,
      name: 'ProcessException',
      message: 'This is another test OS process exception.',
      toString: 'ProcessException: This is another test OS process exception.',
      valueOf: 4,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test exception.', {}],
    {
      code: 0x4,
      name: 'ProcessException',
      message: 'This is a test exception.',
      toString: 'ProcessException: This is a test exception.',
      valueOf: 4,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test exception.', { os: 'linux' }],
    {
      code: 0x4,
      name: 'ProcessException',
      message: 'This is a test exception.',
      toString: 'ProcessException: This is a test exception.',
      valueOf: 4,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android' }],
    {
      code: 0x4,
      name: 'ProcessException',
      message: 'This is a test exception.',
      toString: 'ProcessException: This is a test exception.',
      valueOf: 4,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test exception.', { errorCode: 'EPERM' }],
    {
      code: 0x4,
      name: 'ProcessException',
      message: 'This is a test exception.',
      toString: 'ProcessException: This is a test exception.',
      valueOf: 4,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'android', errorCode: 'EPERM' }],
    {
      code: 0x4,
      name: 'ProcessException',
      message: 'This is a test exception.',
      toString: 'ProcessException: This is a test exception.',
      valueOf: 4,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { os: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x4,
      name: 'ProcessException',
      message: 'This is a test exception.',
      toString: 'ProcessException: This is a test exception.',
      valueOf: 4,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
