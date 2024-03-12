/**
 * This file contains tests for the IndexException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';
import { IndexExceptionData } from '../mod.ts';

import {
  fixtureInheritance,
  fixturesNew,
  fixturesNewData,
  fixturesNewMessage,
  fixturesNewMessageData,
  IndexException,
} from './fixtures/index_exception.fixtures.ts';

describe('IndexException', () => {
  it('inheritance tree', () => {
    const exception = new IndexException('This is a test message.');
    fixtureInheritance.forEach((cls) => {
      assertEquals(exception instanceof cls, true);
    });
  });

  it('new()', () => {
    fixturesNew.forEach(([expected]) => {
      const exception = new IndexException();

      assertEquals(exception.code, expected.code);
      assertEquals(exception.name, expected.name);
      assertEquals(exception.message, expected.message);
      assertEquals(exception.toString(), expected.toString);
      assertEquals(exception.valueOf(), expected.valueOf);
      assertEquals(exception.cause, expected.cause);
      assertEquals(exception.data, expected.data);
    });
  });

  it('new(message)', () => {
    fixturesNewMessage.forEach(([args, expected]) => {
      const [message] = args;
      const exception = new IndexException(message);

      assertEquals(exception.code, expected.code);
      assertEquals(exception.name, expected.name);
      assertEquals(exception.message, expected.message);
      assertEquals(exception.toString(), expected.toString);
      assertEquals(exception.valueOf(), expected.valueOf);
      assertEquals(exception.cause, expected.cause);
      assertEquals(exception.data, expected.data);
    });
  });

  it('new(data)', () => {
    fixturesNewData.forEach(([args, expected]) => {
      const [data] = args;
      const exception = new IndexException(data as IndexExceptionData);

      assertEquals(exception.code, expected.code);
      assertEquals(exception.name, expected.name);
      assertEquals(exception.message, expected.message);
      assertEquals(exception.toString(), expected.toString);
      assertEquals(exception.valueOf(), expected.valueOf);
      assertEquals(exception.cause, expected.cause);
      assertEquals(exception.data, expected.data);
    });
  });

  it('new(message, data)', () => {
    fixturesNewMessageData.forEach(([args, expected]) => {
      const [message, data] = args;
      const exception = new IndexException(message, data as IndexExceptionData);

      assertEquals(exception.code, expected.code);
      assertEquals(exception.name, expected.name);
      assertEquals(exception.message, expected.message);
      assertEquals(exception.toString(), expected.toString);
      assertEquals(exception.valueOf(), expected.valueOf);
      assertEquals(exception.cause, expected.cause);
      assertEquals(exception.data, expected.data);
    });
  });
});
