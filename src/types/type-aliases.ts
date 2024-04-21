/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Type aliases for the module. For interfaces, see ./interfaces.ts.
 */

import type { IndeterminateObject } from '@kz/common-types';

import type { Exception } from '../exceptions/exception.ts';

/**
 * Describes the data common to all exceptions.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { Exception, type CommonExceptionData } from '../mod.ts';
 *
 * try {
 *   try {
 *     throw new Exception('Just felt like breaking.');
 *   } catch (cause) {
 *     const data: CommonExceptionData = { cause };
 *
 *     throw new Exception('An error occurred.', data);
 *   }
 * } catch (exception) {
 *   assertEquals(exception.message, 'An error occurred.');
 *   assertEquals(exception.cause?.message, 'Just felt like breaking.');
 * }
 * ```
 */
export type CommonExceptionData = IndeterminateObject & {
  cause?: Error | Exception;
};

/**
 * Utility type to describe the additional, relevant data for an exception.
 *
 * @template T - The type of the additional data.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { BaseExceptionData } from './type-aliases.ts';
 *
 * const data: BaseExceptionData<{ foreignCode: number }> = { foreignCode: 0x123fe4 };
 *
 * assertEquals(data.foreignCode, 1196004);
 * ```
 */
export type BaseExceptionData<
  T extends IndeterminateObject = IndeterminateObject,
> = CommonExceptionData & T;
