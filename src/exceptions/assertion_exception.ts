/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the AssertionException class and its related exception data type.
 */

import { ValueException, type ValueExceptionData } from './value_exception.ts';

/**
 * Additional, related data for the {@link AssertionException} class.
 *
 * @example
 * ```ts
 * import type { AssertionExceptionData } from './assertion_exception.ts';
 *
 * const data: AssertionExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo'); // ✔
 * ```
 */
export type AssertionExceptionData = ValueExceptionData;

/**
 * An `AssertionException` is raised when a false assertion is made.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { AssertionException } from './assertion_exception.ts';
 *
 * const exception = new AssertionException('The two values are not equal.');
 *
 * console.assert(exception.message === 'The two values are not equal.'); // ✔
 * ```
 */
export class AssertionException<
  T extends AssertionExceptionData = AssertionExceptionData,
> extends ValueException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { AssertionException } from './assertion_exception.ts';
   *
   * const exception = new AssertionException('The two values are not equal.');
   *
   * console.assert(exception.code === 36); // ✔
   * ```
   */
  public readonly code: number = 0x24;
}
