/**
 * This file exports the MemoryException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional data about the MemoryException exception.
 */
export type MemoryExceptionData = OSExceptionData;

/**
 * An exception raised when a system operation returns a memory-related error.
 */
export class MemoryException<
  T extends MemoryExceptionData = MemoryExceptionData,
> extends OSException<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x2;
}
