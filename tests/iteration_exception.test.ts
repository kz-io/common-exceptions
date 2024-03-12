/**
 * This file contains tests for the IterationException class.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';
import { IterationExceptionData } from '../mod.ts';

import {
  fixtureInheritance,
  fixturesNew,
  fixturesNewData,
  fixturesNewMessage,
  fixturesNewMessageData,
  IterationException,
} from './fixtures/iteration_exception.fixtures.ts';

describe('IterationException', () => {
  it('inheritance tree', () => {
    const exception = new IterationException('This is a test message.');
    fixtureInheritance.forEach((cls) => {
      assertEquals(exception instanceof cls, true);
    });
  });

  it('new()', () => {
    fixturesNew.forEach(([expected]) => {
      const exception = new IterationException();

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
      const exception = new IterationException(message);

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
      const exception = new IterationException(data as IterationExceptionData);

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
      const exception = new IterationException(
        message,
        data as IterationExceptionData,
      );

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
