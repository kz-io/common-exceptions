/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the OperationException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals, assertInstanceOf } from '@std/assert';

import { I11N_DOCS_HOST, I11N_EX2_PATH } from '../_internal/mod.ts';

import { Exception, OperationException } from './mod.ts';

describe('OperationException', () => {
  const CODE = 16;
  const NAME = 'OperationException';
  const URI_BASE = `${I11N_DOCS_HOST}/${I11N_EX2_PATH}/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new OperationException('An error occurred.');
    it('should extend the Error and Exception class', () => {
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'Operation failed.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new OperationException(MSG);

    it('should create a new OperationException instance with the specified message description', () => {
      assertInstanceOf(exc, OperationException);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertEquals(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });
});
