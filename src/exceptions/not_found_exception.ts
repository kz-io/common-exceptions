/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the NotFoundException class and its related exception data type.
 */

import { ValueException, type ValueExceptionData } from './value_exception.ts';

/**
 * Additional, related data for the {@link NotFoundException} class.
 *
 * @example
 * ```ts
 * import type { NotFoundExceptionData } from './not_found_exception.ts';
 *
 * const data: NotFoundExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo'); // ✔
 * ```
 */
export type NotFoundExceptionData = ValueExceptionData;

/**
 * A `NotFoundException` is raised when a resource is not found.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { NotFoundException } from './not_found_exception.ts';
 *
 * const exception = new NotFoundException('Cannot find the requested resource.');
 * const msg = 'Cannot find the requested resource.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 */
export class NotFoundException<
  T extends NotFoundExceptionData = NotFoundExceptionData,
> extends ValueException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { NotFoundException } from './not_found_exception.ts';
   *
   * const exception = new NotFoundException('Cannot find the requested resource.');
   *
   * console.assert(exception.code === 43); // ✔
   * ```
   */
  public readonly code: number = 0x2b;
}
