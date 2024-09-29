/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the KeyException class and its related exception data type.
 */

import { definedArgs } from '../_internal/mod.ts';
import { MethodException } from './method_exception.ts';

import type { BaseExceptionData } from '../types/mod.ts';

/**
 * Additional, related data for the {@link KeyException} class.
 *
 * @example
 * ```ts
 * import type { KeyExceptionData } from './key_exception.ts';
 *
 * const data: KeyExceptionData = {
 *   key: 'foo',
 *   validKeys: ['bar', 'baz'],
 * };
 *
 * console.assert(data.key === 'foo'); // ✔
 * ```
 */
export type KeyExceptionData = BaseExceptionData<{
  /**
   * The name of the key that doesn’t exist.
   */
  key?: string;

  /**
   * The name of object value the key doesn’t exist on.
   */
  valueName?: string;

  /**
   * The available keys on the object value.
   */
  validKeys?: string[];
}>;

/**
 * A `KeyException` is raised when a property key doesn’t exist on an object.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { KeyException } from './key_exception.ts';
 *
 * const exception = new KeyException();
 * const msg = 'Unable to locate a property key on an object.';
 * console.assert(exception.message === msg); // ✔
 * ```
 *
 * @example With provided message
 * ```ts
 * import { KeyException } from './key_exception.ts';
 *
 * const exception = new KeyException('The name key was not found.');
 * const msg = 'The name key was not found.';
 * console.assert(exception.message === msg); // ✔
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { KeyException } from './key_exception.ts';
 *
 * const exception = new KeyException({ key: 'foo' });
 * const msg = 'Unable to locate a property key, foo, on an object.';
 * console.assert(exception.message === msg); // ✔
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { KeyException } from './key_exception.ts';
 *
 * const exception = new KeyException('The name key was not found.', { key: 'foo' });
 * const msg = 'The name key was not found.';
 * console.assert(exception.message === msg); // ✔
 * ```
 */
export class KeyException<
  T extends KeyExceptionData = KeyExceptionData,
> extends MethodException<T> {
  /**
   * Creates a new instance of the `KeyException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `KeyException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `KeyException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `KeyException` class with the specified message description and additional, relevant data.
   *
   * @param message The exception message description.
   * @param data The additional, relevant data for the exception.
   */
  constructor(message: string, data: T);

  /**
   * @ignore implementation
   */
  constructor(messageOrData: string | T = DEFAULT_MESSAGE, data: T = {} as T) {
    let message: string;

    if (typeof messageOrData === 'string') {
      message = messageOrData;
    } else {
      data = messageOrData;
      message = createMessageFromData(data);
    }

    message = message || DEFAULT_MESSAGE;

    super(message, data);
  }

  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { KeyException } from './key_exception.ts';
   *
   * const exception = new KeyException('The name key was not found.');
   *
   * console.assert(exception.code === 45); // ✔
   * ```
   */
  public readonly code: number = 0x2d;
}

/**
 * The default message for the {@link KeyException} exception.
 */
const DEFAULT_MESSAGE = 'Unable to locate a property key on an object.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: KeyExceptionData): string {
  const { key, validKeys, valueName } = data;
  const keys = (validKeys || []).join(', ');

  switch (true) {
    case definedArgs(key, keys, valueName):
      return `Unable to locate a property key, ${key}, on an object, ${valueName}. Valid property keys include: ${keys}.`;
    case definedArgs(key, keys):
      return `Unable to locate a property key, ${key}, on an object. Valid property keys include: ${keys}.`;
    case definedArgs(key, valueName):
      return `Unable to locate a property key, ${key}, on an object, ${valueName}.`;
    case definedArgs(keys, valueName):
      return `Unable to locate a property key on an object, ${valueName}. Valid property keys include: ${keys}.`;
    case definedArgs(key):
      return `Unable to locate a property key, ${key}, on an object.`;
    case definedArgs(keys):
      return `Unable to locate a property key on an object. Valid property keys include: ${keys}.`;
    case definedArgs(valueName):
      return `Unable to locate a property key on an object, ${valueName}.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
