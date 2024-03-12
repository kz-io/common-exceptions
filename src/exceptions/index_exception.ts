/**
 * This file exports the IndexException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { RangeException } from './range_exception.ts';

import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the IndexException exception.
 */
export type IndexExceptionData = BaseExceptionData<{
  /**
   * The index that is outside a range.
   */
  index?: number;

  /**
   * The name of the indexed value.
   */
  valueName?: string;

  /**
   * The upper bound, inclusive,
   */
  upperBound?: number;
}>;

/**
 * An exception raised when an index is outside the bounds of an array.
 */
export class IndexException<T extends IndexExceptionData = IndexExceptionData>
  extends RangeException<T> {
  /**
   * Creates a new IndexException with the default message description.
   */
  constructor();

  /**
   * Creates an IndexException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an IndexException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an IndexException with a message description and additional relevant data.
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
  public readonly code: number = 0x29;
}

/**
 * The default message for the IndexException exception.
 */
const DEFAULT_MESSAGE = 'An index is outside the bounds of an array.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: IndexExceptionData): string {
  const { index, upperBound, valueName } = data;

  switch (true) {
    case definedArgs(index, upperBound, valueName):
      return `An index, ${index}, is outside the bounds of an array, ${valueName}. It must be between 0 and ${upperBound}, inclusive.`;
    case definedArgs(index, valueName):
      return `An index, ${index}, is outside the bounds of an array, ${valueName}.`;
    case definedArgs(index, upperBound):
      return `An index, ${index}, is outside the bounds of an array. It must be between 0 and ${upperBound}, inclusive.`;
    case definedArgs(upperBound, valueName):
      return `An index is outside the bounds of an array, ${valueName}. It must be between 0 and ${upperBound}, inclusive.`;
    case definedArgs(index):
      return `An index, ${index}, is outside the bounds of an array.`;
    case definedArgs(valueName):
      return `An index is outside the bounds of an array, ${valueName}.`;
    case definedArgs(upperBound):
      return `An index is outside the bounds of an array. It must be between 0 and ${upperBound}, inclusive.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
