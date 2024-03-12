/**
 * This file exports the InvalidException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { Exception, type ExceptionData } from './exception.ts';

/**
 * Additional data about the InvalidException exception.
 */
export type InvalidExceptionData = ExceptionData;

/**
 * An exception raised when data, or an operation, is invalid.
 */
export class InvalidException<
  T extends InvalidExceptionData = InvalidExceptionData,
> extends Exception<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x20;
}
