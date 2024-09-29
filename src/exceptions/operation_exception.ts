/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the OperationException class and its related exception data type.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional, related data for the {@link OperationException} class.
 *
 * @example
 * ```ts
 * import type { OperationExceptionData } from './operation_exception.ts';
 *
 * const data: OperationExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo'); // ✔
 * ```
 */
export type OperationExceptionData = OSExceptionData;

/**
 * An `OperationException` is raised when a software operation fails.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { OperationException } from './operation_exception.ts';
 *
 * const exception = new OperationException('Operation failed.');
 *
 * console.assert(exception.message === 'Operation failed.'); // ✔
 * ```
 */
export class OperationException<
  T extends OperationExceptionData = OperationExceptionData,
> extends OSException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { OperationException } from './operation_exception.ts';
   *
   * const exception = new OperationException('Operation failed.');
   *
   * console.assert(exception.code === 16); // ✔
   * ```
   */
  public readonly code: number = 0x10;
}
