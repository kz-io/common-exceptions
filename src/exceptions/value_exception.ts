/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ValueException class and its related exception data type.
 */

import {
  InvalidException,
  type InvalidExceptionData,
} from './invalid_exception.ts';

/**
 * Additional, related data for the {@link ValueException} class.
 *
 * @example
 * ```ts
 * import type { ValueExceptionData } from './value_exception.ts';
 *
 * const data: ValueExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo'); // ✔
 * ```
 */
export type ValueExceptionData = InvalidExceptionData;

/**
 * A `ValueException` is raised when a value is invalid.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { ValueException } from './value_exception.ts';
 *
 * const exception = new ValueException('The provided value is invalid.');
 * const msg = 'The provided value is invalid.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 */
export class ValueException<T extends ValueExceptionData = ValueExceptionData>
  extends InvalidException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { ValueException } from './value_exception.ts';
   *
   * const exception = new ValueException('The provided value is invalid.');
   *
   * console.assert(exception.code === 35); // ✔
   * ```
   */
  public readonly code: number = 0x23;
}
