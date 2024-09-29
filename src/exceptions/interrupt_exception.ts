/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the InterruptException class and its related exception data type.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional, related data for the {@link InterruptException} class.
 *
 * @example
 * ```ts
 * import type { InterruptExceptionData } from './interrupt_exception.ts';
 *
 * const data: InterruptExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo'); // ✔
 * ```
 */
export type InterruptExceptionData = OSExceptionData;

/**
 * An `InterruptException` is raised when a system operation is interrupted.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { InterruptException } from './interrupt_exception.ts';
 *
 * const exception = new InterruptException('Operation was interrupted.');
 * const msg = 'Operation was interrupted.';
 * console.assert(exception.message === msg); // ✔
 * ```
 */
export class InterruptException<
  T extends InterruptExceptionData = InterruptExceptionData,
> extends OSException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { InterruptException } from './interrupt_exception.ts';
   *
   * const exception = new InterruptException('Operation was interrupted.');
   *
   * console.assert(exception.code === 6); // ✔
   * ```
   */
  public readonly code: number = 0x6;
}
