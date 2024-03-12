/**
 * This file contains test fixtures for the Exception class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { I11N_DOCS_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';
import { Exception as _Exception } from '../../mod.ts';

const BASEURL = `${I11N_DOCS_HOST}/${I11N_EX2_PATH}`;

export const Exception = _Exception;

export const fixtureInheritance = [
  Error,
] as const;

export const fixturesNewMessage = [
  [
    ['This is a test exception.'],
    {
      code: 0x0,
      name: 'Exception',
      message: 'This is a test exception.',
      toString: 'Exception: This is a test exception.',
      valueOf: 0,
      cause: undefined,
      data: undefined,
      helpUrl: `${BASEURL}/0x0?message=This%20is%20a%20test%20exception.`,
    },
  ],
  [
    ['This is another test exception.'],
    {
      code: 0x0,
      name: 'Exception',
      message: 'This is another test exception.',
      toString: 'Exception: This is another test exception.',
      valueOf: 0,
      cause: undefined,
      data: undefined,
      helpUrl: `${BASEURL}/0x0?message=This%20is%20another%20test%20exception.`,
    },
  ],
] as const;

const data0 = { user: 'atest', action: 'save' };
const error0 = new Error('Nothing went wrong.');
const data1 = { ...data0, cause: error0 };
const exception0 = new Exception('This is a test exception.', {
  cause: error0,
  ...data0,
});

export const fixturesNewMessageData = [
  [
    ['This is a test exception.', data0],
    {
      code: 0x0,
      name: 'Exception',
      message: 'This is a test exception.',
      toString: 'Exception: This is a test exception.',
      valueOf: 0,
      cause: undefined,
      data: data0,
      helpUrl: `${BASEURL}/0x0?message=This%20is%20a%20test%20exception.&data=${
        encodeURIComponent(JSON.stringify(data0))
      }`,
    },
  ],
  [
    ['This is another test exception.', { cause: error0 }],
    {
      code: 0x0,
      name: 'Exception',
      message: 'This is another test exception.',
      toString: 'Exception: This is another test exception.',
      valueOf: 0,
      cause: error0,
      data: undefined,
      helpUrl:
        `${BASEURL}/0x0?message=This%20is%20another%20test%20exception.&cause=${
          encodeURIComponent(JSON.stringify(error0))
        }`,
    },
  ],
  [
    ['This is another test exception.', data1],
    {
      code: 0x0,
      name: 'Exception',
      message: 'This is another test exception.',
      toString: 'Exception: This is another test exception.',
      valueOf: 0,
      cause: error0,
      data: data0,
      helpUrl:
        `${BASEURL}/0x0?message=This%20is%20another%20test%20exception.&data=${
          encodeURIComponent(JSON.stringify(data0))
        }&cause=${encodeURIComponent(JSON.stringify(error0))}`,
    },
  ],
  [
    ['This is another test exception.', { cause: exception0 }],
    {
      code: 0x0,
      name: 'Exception',
      message: 'This is another test exception.',
      toString: 'Exception: This is another test exception.',
      valueOf: 0,
      cause: exception0,
      data: undefined,
      helpUrl:
        `${BASEURL}/0x0?message=This%20is%20another%20test%20exception.&cause=${
          encodeURIComponent(JSON.stringify({ helpUrl: exception0.helpUrl }))
        }`,
    },
  ],
] as const;
