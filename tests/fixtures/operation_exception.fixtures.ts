/**
 * This file contains test fixtures for the OperationException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  OperationException as _OperationException,
} from '../../mod.ts';

export const OperationException = _OperationException;

export const fixtureInheritance = [
  Error,
  Exception,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test operation exception.'],
    {
      code: 0x10,
      name: 'OperationException',
      message: 'This is a test operation exception.',
      toString: 'OperationException: This is a test operation exception.',
      valueOf: 16,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is another test operation exception.'],
    {
      code: 0x10,
      name: 'OperationException',
      message: 'This is another test operation exception.',
      toString: 'OperationException: This is another test operation exception.',
      valueOf: 16,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['This is a test exception.', {}],
    {
      code: 0x10,
      name: 'OperationException',
      message: 'This is a test exception.',
      toString: 'OperationException: This is a test exception.',
      valueOf: 16,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['This is a test exception.', { operation: 'linux' }],
    {
      code: 0x10,
      name: 'OperationException',
      message: 'This is a test exception.',
      toString: 'OperationException: This is a test exception.',
      valueOf: 16,
      cause: undefined,
      data: { operation: 'linux' },
    },
  ],
  [
    ['This is a test exception.', { operation: 'android' }],
    {
      code: 0x10,
      name: 'OperationException',
      message: 'This is a test exception.',
      toString: 'OperationException: This is a test exception.',
      valueOf: 16,
      cause: undefined,
      data: { operation: 'android' },
    },
  ],
  [
    ['This is a test exception.', { errorCode: 'EPERM' }],
    {
      code: 0x10,
      name: 'OperationException',
      message: 'This is a test exception.',
      toString: 'OperationException: This is a test exception.',
      valueOf: 16,
      cause: undefined,
      data: { errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { operation: 'android', errorCode: 'EPERM' }],
    {
      code: 0x10,
      name: 'OperationException',
      message: 'This is a test exception.',
      toString: 'OperationException: This is a test exception.',
      valueOf: 16,
      cause: undefined,
      data: { operation: 'android', errorCode: 'EPERM' },
    },
  ],
  [
    ['This is a test exception.', { operation: 'linux', errorCode: 'EPERM' }],
    {
      code: 0x10,
      name: 'OperationException',
      message: 'This is a test exception.',
      toString: 'OperationException: This is a test exception.',
      valueOf: 16,
      cause: undefined,
      data: { operation: 'linux', errorCode: 'EPERM' },
    },
  ],
] as const;
