/**
 * This file exports the ValueException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  InvalidException,
  type InvalidExceptionData,
} from './invalid_exception.ts';

/**
 * Additional data about the ValueException exception.
 */
export type ValueExceptionData = InvalidExceptionData;

/**
 * An exception raised when a value is invalid.
 */
export class ValueException<T extends ValueExceptionData = ValueExceptionData>
  extends InvalidException<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x23;
}
