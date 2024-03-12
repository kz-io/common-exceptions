/**
 * This file exports the InterruptException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional data about the InterruptException exception.
 */
export type InterruptExceptionData = OSExceptionData;

/**
 * An exception raised when a system operation is interrupted.
 */
export class InterruptException<
  T extends InterruptExceptionData = InterruptExceptionData,
> extends OSException<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x6;
}
