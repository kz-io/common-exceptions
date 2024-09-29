/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Type aliases for the module.
 */

import type { IndeterminateObject } from '@kz/common-types';
import type { Exception } from '../exceptions/exception.ts';

/**
 * A CommonExceptionData is describes the exception data properties accepted
 * for all exceptions and allowing for any other exception data property to be
 * defined.
 *
 * @example
 * ```ts
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
 *   console.assert(exception.message === 'An error occurred.');              // ✔
 *   console.assert(exception.cause?.message === 'Just felt like breaking.'); // ✔
 * }
 * ```
 */
export type CommonExceptionData = IndeterminateObject & {
  cause?: Error | Exception;
};

/**
 * A `BaseExceptionData` is a utility type to easily create an exception’s named data properties.
 *
 * @template T - The type of the additional data.
 *
 * @example
 * ```ts
 * import type { BaseExceptionData } from '../mod.ts';
 *
 * const data: BaseExceptionData<{ foreignCode: number }> = { foreignCode: 0x123fe4 };
 *
 * console.assert(data.foreignCode === 1196004); // ✔
 * ```
 */
export type BaseExceptionData<
  T extends IndeterminateObject = IndeterminateObject,
> = CommonExceptionData & T;
