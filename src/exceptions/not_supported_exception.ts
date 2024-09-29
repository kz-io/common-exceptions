/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the NotSupportedException class and its related exception data type.
 */

import {
  InvalidException,
  type InvalidExceptionData,
} from './invalid_exception.ts';

/**
 * Additional, related data for the {@link NotSupportedException} class.
 *
 * @example
 * ```ts
 * import type { NotSupportedExceptionData } from './not_supported_exception.ts';
 *
 * const data: NotSupportedExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo'); // ✔
 * ```
 */
export type NotSupportedExceptionData = InvalidExceptionData;

/**
 * A `NotSupportedException` is raised when a process or feature is not supported for an environment.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { NotSupportedException } from './not_supported_exception.ts';
 *
 * const exception = new NotSupportedException('This operation is not supported.');
 * const msg = 'This operation is not supported.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 */
export class NotSupportedException<
  T extends NotSupportedExceptionData = NotSupportedExceptionData,
> extends InvalidException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { NotSupportedException } from './not_supported_exception.ts';
   *
   * const exception = new NotSupportedException('This operation is not supported.');
   *
   * console.assert(exception.code === 33); // ✔
   * ```
   */
  public readonly code: number = 0x21;
}
