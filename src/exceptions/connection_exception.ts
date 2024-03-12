/**
 * This file exports the ConnectionException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional data about the ConnectionException exception.
 */
export type ConnectionExceptionData = OSExceptionData;

/**
 * An exception raised when a system operation returns a disk-related error.
 */
export class ConnectionException<
  T extends ConnectionExceptionData = ConnectionExceptionData,
> extends OSException<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x5;
}
