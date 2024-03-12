/**
 * This file exports the KeyException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { MethodException } from './method_exception.ts';

import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the KeyException exception.
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
 * An exception raised when a property key doesn’t exist on an object.
 */
export class KeyException<T extends KeyExceptionData = KeyExceptionData>
  extends MethodException<T> {
  /**
   * Creates a new KeyException with the default message description.
   */
  constructor();

  /**
   * Creates an KeyException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an KeyException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an KeyException with a message description and additional relevant data.
   *
   * @param message The human-readable description of the exception.
   * @param data Additional, relevant data about the exception.
   */
  constructor(message: string, data: T);

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
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x2d;
}

/**
 * The default message for the KeyException exception.
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

  switch (true) {
    case definedArgs(key, validKeys, valueName):
      return `Unable to locate a property key, ${key}, on an object, ${valueName}. Valid property keys include: ${
        (validKeys || []).join(', ')
      }.`;
    case definedArgs(key, valueName):
      return `Unable to locate a property key, ${key}, on an object, ${valueName}.`;
    case definedArgs(key, validKeys):
      return `Unable to locate a property key, ${key}, on an object. Valid property keys include: ${
        (validKeys || []).join(', ')
      }.`;
    case definedArgs(valueName, validKeys):
      return `Unable to locate a property key on an object, ${valueName}. Valid property keys include: ${
        (validKeys || []).join(', ')
      }.`;
    case definedArgs(key):
      return `Unable to locate a property key, ${key}, on an object.`;
    case definedArgs(valueName):
      return `Unable to locate a property key on an object, ${valueName}.`;
    case definedArgs(validKeys):
      return `Unable to locate a property key on an object. Valid property keys include: ${
        (validKeys || []).join(', ')
      }.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
