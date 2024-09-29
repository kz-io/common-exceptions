/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the FormatException class and its related exception data type.
 */

import { ValueException, type ValueExceptionData } from './value_exception.ts';

/**
 * Additional, related data for the {@link FormatException} class.
 *
 * @example
 * ```ts
 * import type { FormatExceptionData } from './format_exception.ts';
 *
 * const data: FormatExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo'); // ✔
 * ```
 */
export type FormatExceptionData = ValueExceptionData;

/**
 * A `FormatException` is raised when formatting is unsuccessful, or invalid.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { FormatException } from './format_exception.ts';
 *
 * const exception = new FormatException('The JSON format is invalid.');
 * const msg = 'The JSON format is invalid.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 */
export class FormatException<
  T extends FormatExceptionData = FormatExceptionData,
> extends ValueException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { FormatException } from './format_exception.ts';
   *
   * const exception = new FormatException('The JSON format is invalid.');
   *
   * console.assert(exception.code === 37); // ✔
   * ```
   */
  public readonly code: number = 0x25;
}
