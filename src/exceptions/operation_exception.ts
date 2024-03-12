/**
 * This file exports the OperationException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { Exception } from './exception.ts';

import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the OperationException exception.
 */
export type OperationExceptionData = BaseExceptionData;

/**
 * An exception raised when a software operation fails.
 */
export class OperationException<
  T extends OperationExceptionData = OperationExceptionData,
> extends Exception<T> {
  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x10;
}
