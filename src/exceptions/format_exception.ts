/**
 * This file exports the FormatException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { ValueException, type ValueExceptionData } from './value_exception.ts';

/**
 * Additional data about the ValueException exception.
 */
export type FormatExceptionData = ValueExceptionData;

/**
 * An exception raised when formatting is unsuccessful, or invalid.
 */
export class FormatException<
  T extends FormatExceptionData = FormatExceptionData,
> extends ValueException<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x25;
}
