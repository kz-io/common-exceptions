/**
 * This file exports the ArgumentIndexException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { IndexException } from './index_exception.ts';

import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the ArgumentIndexException exception.
 */
export type ArgumentIndexExceptionData = BaseExceptionData<{
  /**
   * The index that is outside the arguments array range.
   */
  index?: number;

  /**
   * The upper bound, inclusive, of the arguments array range of indexes.
   */
  upperBound?: number;
}>;

/**
 * An exception raised when an index is outside the bounds of an arguments array.
 */
export class ArgumentIndexException<
  T extends ArgumentIndexExceptionData = ArgumentIndexExceptionData,
> extends IndexException<T> {
  /**
   * Creates a new ArgumentIndexException with the default message description.
   */
  constructor();

  /**
   * Creates an ArgumentIndexException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an ArgumentIndexException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an ArgumentIndexException with a message description and additional relevant data.
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
  public readonly code: number = 0x2a;
}

/**
 * The default message for the ArgumentIndexException exception.
 */
const DEFAULT_MESSAGE = 'An index is outside the bounds of an arguments array.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: ArgumentIndexExceptionData): string {
  const { index, upperBound } = data;

  switch (true) {
    case definedArgs(index, upperBound):
      return `An index, ${index}, is outside the bounds of an arguments array. It must be between 0 and ${upperBound}, inclusive.`;
    case definedArgs(index):
      return `An index, ${index}, is outside the bounds of an arguments array.`;
    case definedArgs(upperBound):
      return `An index is outside the bounds of an arguments array. It must be between 0 and ${upperBound}, inclusive.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
