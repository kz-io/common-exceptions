/**
 * This file exports the AssertionException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { ValueException, type ValueExceptionData } from './value_exception.ts';

/**
 * Additional data about the ValueException exception.
 */
export type AssertionExceptionData = ValueExceptionData;

/**
 * An exception raised when an false assertion is made.
 */
export class AssertionException<
  T extends AssertionExceptionData = AssertionExceptionData,
> extends ValueException<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x24;
}
