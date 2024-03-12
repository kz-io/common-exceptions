/**
 * This file contains test fixtures for the KeyException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  InvalidException,
  KeyException as _KeyException,
  MethodException,
  NotFoundException,
  ValueException,
} from '../../mod.ts';

export const KeyException = _KeyException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
  NotFoundException,
  MethodException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x2d,
      name: 'KeyException',
      message: 'Unable to locate a property key on an object.',
      toString: 'KeyException: Unable to locate a property key on an object.',
      valueOf: 45,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['The getAction property key was not found.'],
    {
      code: 0x2d,
      name: 'KeyException',
      message: 'The getAction property key was not found.',
      toString: 'KeyException: The getAction property key was not found.',
      valueOf: 45,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x2d,
      name: 'KeyException',
      message: 'Unable to locate a property key on an object.',
      toString: 'KeyException: Unable to locate a property key on an object.',
      valueOf: 45,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { key: 'getAction' };
const data2 = { valueName: 'ctrl' };
const data3 = { validKeys: ['get', 'set', 'delete'] };
const data4 = { ...data1, ...data2, ...data3 };
const data5 = { ...data2, ...data3 };
const data6 = { ...data1, ...data3 };
const data7 = { ...data1, ...data2 };

export const fixturesNewData = [
  [
    [data1],
    {
      code: 0x2d,
      name: 'KeyException',
      message: 'Unable to locate a property key, getAction, on an object.',
      toString:
        'KeyException: Unable to locate a property key, getAction, on an object.',
      valueOf: 45,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data0],
    {
      code: 0x2d,
      name: 'KeyException',
      message: 'Unable to locate a property key on an object.',
      toString: 'KeyException: Unable to locate a property key on an object.',
      valueOf: 45,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data2],
    {
      code: 0x2d,
      name: 'KeyException',
      message: 'Unable to locate a property key on an object, ctrl.',
      toString:
        'KeyException: Unable to locate a property key on an object, ctrl.',
      valueOf: 45,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x2d,
      name: 'KeyException',
      message:
        'Unable to locate a property key on an object. Valid property keys include: get, set, delete.',
      toString:
        'KeyException: Unable to locate a property key on an object. Valid property keys include: get, set, delete.',
      valueOf: 45,
      cause: undefined,
      data: data3,
    },
  ],
  [
    [data4],
    {
      code: 0x2d,
      name: 'KeyException',
      message:
        'Unable to locate a property key, getAction, on an object, ctrl. Valid property keys include: get, set, delete.',
      toString:
        'KeyException: Unable to locate a property key, getAction, on an object, ctrl. Valid property keys include: get, set, delete.',
      valueOf: 45,
      cause: undefined,
      data: data4,
    },
  ],
  [
    [data5],
    {
      code: 0x2d,
      name: 'KeyException',
      message:
        'Unable to locate a property key on an object, ctrl. Valid property keys include: get, set, delete.',
      toString:
        'KeyException: Unable to locate a property key on an object, ctrl. Valid property keys include: get, set, delete.',
      valueOf: 45,
      cause: undefined,
      data: data5,
    },
  ],
  [
    [data6],
    {
      code: 0x2d,
      name: 'KeyException',
      message:
        'Unable to locate a property key, getAction, on an object. Valid property keys include: get, set, delete.',
      toString:
        'KeyException: Unable to locate a property key, getAction, on an object. Valid property keys include: get, set, delete.',
      valueOf: 45,
      cause: undefined,
      data: data6,
    },
  ],
  [
    [data7],
    {
      code: 0x2d,
      name: 'KeyException',
      message:
        'Unable to locate a property key, getAction, on an object, ctrl.',
      toString:
        'KeyException: Unable to locate a property key, getAction, on an object, ctrl.',
      valueOf: 45,
      cause: undefined,
      data: data7,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['The getAction property key was not found.', data1],
    {
      code: 0x2d,
      name: 'KeyException',
      message: 'The getAction property key was not found.',
      toString: 'KeyException: The getAction property key was not found.',
      valueOf: 45,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['The getAction property key was not found.', data0],
    {
      code: 0x2d,
      name: 'KeyException',
      message: 'The getAction property key was not found.',
      toString: 'KeyException: The getAction property key was not found.',
      valueOf: 45,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;
