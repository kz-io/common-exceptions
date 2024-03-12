/**
 * This file contains test fixtures for the FormatException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  FormatException as _FormatException,
  InvalidException,
  ValueException,
} from '../../mod.ts';

export const FormatException = _FormatException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test format exception.'],
    {
      code: 0x25,
      name: 'FormatException',
      message: 'This is a test format exception.',
      toString: 'FormatException: This is a test format exception.',
      valueOf: 37,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test format exception.'],
    {
      code: 0x25,
      name: 'FormatException',
      message: 'This is another test format exception.',
      toString: 'FormatException: This is another test format exception.',
      valueOf: 37,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test format exception.', {}],
    {
      code: 0x25,
      name: 'FormatException',
      message: 'This is a test format exception.',
      toString: 'FormatException: This is a test format exception.',
      valueOf: 37,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test format exception.', { os: 'linux' }],
    {
      code: 0x25,
      name: 'FormatException',
      message: 'This is a test format exception.',
      toString: 'FormatException: This is a test format exception.',
      valueOf: 37,
      cause: undefined,
      data: { os: 'linux' },
    },
  ],
  [
    ['This is a test format exception.', { os: 'android' }],
    {
      code: 0x25,
      name: 'FormatException',
      message: 'This is a test format exception.',
      toString: 'FormatException: This is a test format exception.',
      valueOf: 37,
      cause: undefined,
      data: { os: 'android' },
    },
  ],
  [
    ['This is a test format exception.', { errorCode: 'EPERM' }],
    {
      code: 0x25,
      name: 'FormatException',
      message: 'This is a test format exception.',
      toString: 'FormatException: This is a test format exception.',
      valueOf: 37,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test format exception.', { os: 'android', errorCode: 'EPERM' }],
    {
      code: 0x25,
      name: 'FormatException',
      message: 'This is a test format exception.',
      toString: 'FormatException: This is a test format exception.',
      valueOf: 37,
      cause: undefined,
      data: { os: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test format exception.', { os: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x25,
      name: 'FormatException',
      message: 'This is a test format exception.',
      toString: 'FormatException: This is a test format exception.',
      valueOf: 37,
      cause: undefined,
      data: { os: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
