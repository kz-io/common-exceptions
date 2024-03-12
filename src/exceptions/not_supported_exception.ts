/**
 * This file exports the NotSupportedException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import {
  InvalidException,
  type InvalidExceptionData,
} from './invalid_exception.ts';

/**
 * Additional data about the NotSupportedException exception.
 */
export type NotSupportedExceptionData = InvalidExceptionData;

/**
 * An exception raised when a process or feature is not supported for an environment.
 */
export class NotSupportedException<
  T extends NotSupportedExceptionData = NotSupportedExceptionData,
> extends InvalidException<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x21;
}
