/**
 * This file exports the ProcessException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional data about the ProcessException exception.
 */
export type ProcessExceptionData = OSExceptionData;

/**
 * An exception raised when a system operation returns a process-related error.
 */
export class ProcessException<
  T extends ProcessExceptionData = ProcessExceptionData,
> extends OSException<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x4;
}
