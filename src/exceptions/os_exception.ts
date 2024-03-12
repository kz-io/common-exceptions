/**
 * This file exports the OSException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { Exception } from './exception.ts';

import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the OSException exception.
 */
export type OSExceptionData = BaseExceptionData;

/**
 * An exception raised when a system operation returns a system-related error, such as I/O errors.
 */
export class OSException<T extends OSExceptionData = OSExceptionData>
  extends Exception<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x1;
}
