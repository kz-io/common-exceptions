/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the DiskException class and its related exception data type.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional, related data for the {@link DiskException} class.
 *
 * @example
 * ```ts
 * import type { DiskExceptionData } from './disk_exception.ts';
 *
 * const data: DiskExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo'); // ✔
 * ```
 */
export type DiskExceptionData = OSExceptionData;

/**
 * A `DiskException` is raised when a system operation returns a disk-related error.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { DiskException } from './disk_exception.ts';
 *
 * const exception = new DiskException('Disk is full.');
 *
 * console.assert(exception.message === 'Disk is full.'); // ✔
 * ```
 */
export class DiskException<T extends DiskExceptionData = DiskExceptionData>
  extends OSException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { DiskException } from './disk_exception.ts';
   *
   * const exception = new DiskException('Disk is full.');
   *
   * console.assert(exception.code === 3); // ✔
   * ```
   */
  public readonly code: number = 0x3;
}
