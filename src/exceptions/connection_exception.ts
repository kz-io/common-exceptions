/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ConnectionException class and its related exception data type.
 */

import { OSException, type OSExceptionData } from './os_exception.ts';

/**
 * Additional, related data for the {@link ConnectionException} class.
 *
 * @example
 * ```ts
 * import type { ConnectionExceptionData } from './connection_exception.ts';
 *
 * const data: ConnectionExceptionData = {
 *   value: 'foo',
 * };
 *
 * console.assert(data.value === 'foo');
 * ```
 */
export type ConnectionExceptionData = OSExceptionData;

/**
 * A `ConnectionException` is raised when a system operation returns a connection-related error.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { ConnectionException } from './connection_exception.ts';
 *
 * const exception = new ConnectionException('Connection was terminated.');
 *
 * console.assert(exception.message === 'Connection was terminated.');
 * ```
 */
export class ConnectionException<
  T extends ConnectionExceptionData = ConnectionExceptionData,
> extends OSException<T> {
  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { ConnectionException } from './connection_exception.ts';
   *
   * const exception = new ConnectionException('Connection was terminated.');
   *
   * console.assert(exception.code === 5);
   * ```
   */
  public readonly code: number = 0x5;
}
