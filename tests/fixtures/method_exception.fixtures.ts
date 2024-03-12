/**
 * This file contains test fixtures for the MethodException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  Exception,
  InvalidException,
  MethodException as _MethodException,
  NotFoundException,
  ValueException,
} from '../../mod.ts';

export const MethodException = _MethodException;

export const fixtureInheritance = [
  Error,
  Exception,
  InvalidException,
  ValueException,
  NotFoundException,
] as const;

export const fixturesNew = [
  [
    {
      code: 0x2c,
      name: 'MethodException',
      message: 'Unable to locate a method on an object.',
      toString: 'MethodException: Unable to locate a method on an object.',
      valueOf: 44,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

export const fixturesNewMessage = [
  [
    ['The getAction method was not found.'],
    {
      code: 0x2c,
      name: 'MethodException',
      message: 'The getAction method was not found.',
      toString: 'MethodException: The getAction method was not found.',
      valueOf: 44,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [''],
    {
      code: 0x2c,
      name: 'MethodException',
      message: 'Unable to locate a method on an object.',
      toString: 'MethodException: Unable to locate a method on an object.',
      valueOf: 44,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;

const data0 = {};
const data1 = { methodName: 'getAction' };
const data2 = { valueName: 'ctrl' };
const data3 = { validMethods: ['get', 'set', 'delete'] };
const data4 = { ...data1, ...data2, ...data3 };
const data5 = { ...data2, ...data3 };
const data6 = { ...data1, ...data3 };
const data7 = { ...data1, ...data2 };

export const fixturesNewData = [
  [
    [data1],
    {
      code: 0x2c,
      name: 'MethodException',
      message: 'Unable to locate a method, getAction, on an object.',
      toString:
        'MethodException: Unable to locate a method, getAction, on an object.',
      valueOf: 44,
      cause: undefined,
      data: data1,
    },
  ],
  [
    [data0],
    {
      code: 0x2c,
      name: 'MethodException',
      message: 'Unable to locate a method on an object.',
      toString: 'MethodException: Unable to locate a method on an object.',
      valueOf: 44,
      cause: undefined,
      data: undefined,
    },
  ],
  [
    [data2],
    {
      code: 0x2c,
      name: 'MethodException',
      message: 'Unable to locate a method on an object, ctrl.',
      toString:
        'MethodException: Unable to locate a method on an object, ctrl.',
      valueOf: 44,
      cause: undefined,
      data: data2,
    },
  ],
  [
    [data3],
    {
      code: 0x2c,
      name: 'MethodException',
      message:
        'Unable to locate a method on an object. Valid methods include: get, set, delete.',
      toString:
        'MethodException: Unable to locate a method on an object. Valid methods include: get, set, delete.',
      valueOf: 44,
      cause: undefined,
      data: data3,
    },
  ],
  [
    [data4],
    {
      code: 0x2c,
      name: 'MethodException',
      message:
        'Unable to locate a method, getAction, on an object, ctrl. Valid methods include: get, set, delete.',
      toString:
        'MethodException: Unable to locate a method, getAction, on an object, ctrl. Valid methods include: get, set, delete.',
      valueOf: 44,
      cause: undefined,
      data: data4,
    },
  ],
  [
    [data5],
    {
      code: 0x2c,
      name: 'MethodException',
      message:
        'Unable to locate a method on an object, ctrl. Valid methods include: get, set, delete.',
      toString:
        'MethodException: Unable to locate a method on an object, ctrl. Valid methods include: get, set, delete.',
      valueOf: 44,
      cause: undefined,
      data: data5,
    },
  ],
  [
    [data6],
    {
      code: 0x2c,
      name: 'MethodException',
      message:
        'Unable to locate a method, getAction, on an object. Valid methods include: get, set, delete.',
      toString:
        'MethodException: Unable to locate a method, getAction, on an object. Valid methods include: get, set, delete.',
      valueOf: 44,
      cause: undefined,
      data: data6,
    },
  ],
  [
    [data7],
    {
      code: 0x2c,
      name: 'MethodException',
      message: 'Unable to locate a method, getAction, on an object, ctrl.',
      toString:
        'MethodException: Unable to locate a method, getAction, on an object, ctrl.',
      valueOf: 44,
      cause: undefined,
      data: data7,
    },
  ],
] as const;

export const fixturesNewMessageData = [
  [
    ['The getAction method was not found.', data1],
    {
      code: 0x2c,
      name: 'MethodException',
      message: 'The getAction method was not found.',
      toString: 'MethodException: The getAction method was not found.',
      valueOf: 44,
      cause: undefined,
      data: data1,
    },
  ],
  [
    ['The getAction method was not found.', data0],
    {
      code: 0x2c,
      name: 'MethodException',
      message: 'The getAction method was not found.',
      toString: 'MethodException: The getAction method was not found.',
      valueOf: 44,
      cause: undefined,
      data: undefined,
    },
  ],
] as const;
