/**
 * This file contains tests for the OperationException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import {
  fixtureInheritance,
  fixturesNewMessage,
  fixturesNewMessageData,
  OperationException,
} from './fixtures/operation_exception.fixtures.ts';

describe('OperationException', () => {
  it('inheritance tree', () => {
    const exception = new OperationException('This is a test message.');
    fixtureInheritance.forEach((cls) => {
      assertEquals(exception instanceof cls, true);
    });
  });

  it('new(message)', () => {
    fixturesNewMessage.forEach(([args, expected]) => {
      const [message] = args;
      const exception = new OperationException(message);

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
      const exception = new OperationException(message, data);

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
