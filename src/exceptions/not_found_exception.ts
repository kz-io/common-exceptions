/**
 * This file exports the NotFoundException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { ValueException, type ValueExceptionData } from './value_exception.ts';

/**
 * Additional data about the NotFoundException exception.
 */
export type NotFoundExceptionData = ValueExceptionData;

/**
 * An exception raised when a resource is not found.
 */
export class NotFoundException<
  T extends NotFoundExceptionData = NotFoundExceptionData,
> extends ValueException<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x2b;
}
