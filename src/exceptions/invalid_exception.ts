/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the InvalidException class and its related exception data type.
 */

import { Exception, type ExceptionData } from './exception.ts';

/**
 * Additional, related data for the {@link InvalidException} class.
 *
 * @example
 * ```ts
 * import type { InvalidExceptionData } from './invalid_exception.ts';
 *
 * const data: InvalidExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo'); // ✔
 * ```
 */
export type InvalidExceptionData = ExceptionData;

/**
 * An `InvalidException` is raised when data, or an operation, is invalid.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { InvalidException } from './invalid_exception.ts';
 *
 * const exception = new InvalidException('Input is invalid.');
 *
 * console.assert(exception.message === 'Input is invalid.'); // ✔
 * ```
 */
export class InvalidException<
  T extends InvalidExceptionData = InvalidExceptionData,
> extends Exception<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { InvalidException } from './invalid_exception.ts';
   *
   * const exception = new InvalidException('Input is invalid.');
   *
   * console.assert(exception.code === 32); // ✔
   * ```
   */
  public readonly code: number = 0x20;
}
