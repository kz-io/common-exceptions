/**
 * This file contains test fixtures for the DecoratorException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  DecoratorException as _DecoratorException,
  Exception,
  InvalidException,
  ValueException,
} from '../../mod.ts';

export const DecoratorException = _DecoratorException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A decorator failed to apply.',
      toString: 'DecoratorException: A decorator failed to apply.',
      valueOf: 38,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['A decorator was unable to apply.'],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A decorator was unable to apply.',
      toString: 'DecoratorException: A decorator was unable to apply.',
      valueOf: 38,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A decorator failed to apply.',
      toString: 'DecoratorException: A decorator failed to apply.',
      valueOf: 38,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { decoratorTarget: 'class' };
const data15 = { decoratorTarget: 'accessor' };
const data2 = { decoratorName: 'rename' };
const data3 = { ...data1, ...data2 };
const data35 = { ...data15, ...data2 };

export const fixturesNewData = [
  [
    [data1],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A class decorator failed to apply.',
      toString: 'DecoratorException: A class decorator failed to apply.',
      valueOf: 38,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data0],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A decorator failed to apply.',
      toString: 'DecoratorException: A decorator failed to apply.',
      valueOf: 38,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data2],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A decorator, rename, failed to apply.',
      toString: 'DecoratorException: A decorator, rename, failed to apply.',
      valueOf: 38,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A class decorator, rename, failed to apply.',
      toString:
        'DecoratorException: A class decorator, rename, failed to apply.',
      valueOf: 38,
      cause: undefined,
      data: data3,
    },
  ],
  [
    [data15],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'An accessor decorator failed to apply.',
      toString: 'DecoratorException: An accessor decorator failed to apply.',
      valueOf: 38,
      cause: undefined,
      data: data15,
    },
  ],
  [
    [data35],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'An accessor decorator, rename, failed to apply.',
      toString:
        'DecoratorException: An accessor decorator, rename, failed to apply.',
      valueOf: 38,
      cause: undefined,
      data: data35,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['A decorator was unable to apply correctly.', data1],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A decorator was unable to apply correctly.',
      toString:
        'DecoratorException: A decorator was unable to apply correctly.',
      valueOf: 38,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['A decorator was unable to apply correctly.', data0],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A decorator was unable to apply correctly.',
      toString:
        'DecoratorException: A decorator was unable to apply correctly.',
      valueOf: 38,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    ['A badly implemented decorator failed.', data2],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: 'A badly implemented decorator failed.',
      toString: 'DecoratorException: A badly implemented decorator failed.',
      valueOf: 38,
      cause: undefined,
      data: data2,
    },
  ],
  [
    ["A decorator didn't work.", data3],
    {
      code: 0x26,
      name: 'DecoratorException',
      message: "A decorator didn't work.",
      toString: "DecoratorException: A decorator didn't work.",
      valueOf: 38,
      cause: undefined,
      data: data3,
    },
  ],
] as const;
