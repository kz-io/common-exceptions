/**
 * This file contains package type aliases.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import type { IndeterminateObject } from '../../deps.ts';
import type { Exception } from '../exceptions/exception.ts';

/**
 * A type alias describing the exception data properties accepted for all exceptions, and allowing for any other exception data property to be defined.
 *
 * @example
 * ```ts
 * const exceptionData: CommonExceptionData = {};
 *
 * try {
 *   throw new Error('I make things up. Nothing is happening.');
 * } catch(e) {
 *   exceptionData.cause = e as Error;
 * }
 *
 * console.log(exceptionData.cause?.message);
 * //  I make things up. Nothing is happening.
 * ```
 */
export type CommonExceptionData = IndeterminateObject & {
  /**
   * The inner, or more original, cause of the exception.
   */
  cause?: Error | Exception;
};

/**
 * A utility type to easily create an exception’s named data properties.
 *
 * @template T - The type describing the additional data properties for the exception.
 *
 * @see {@link CommonExceptionData}
 *
 * @example
 * ```ts
 * type ExceptionData = BaseExceptionData<{
 *   foo?: string;
 *   bar?: string;
 * }>;
 *
 * class Exception<T extends ExceptionData = ExceptionData > extends Error {
 *   constructor(protected data: ExceptionData ) {
 *     const { foo, bar } = data;
 *
 *     const message = foo
 *       ? `Foo: ${foo}${bar ? `, Bar: ${bar}` : ''}`
 *       : bar ? `Bar: ${bar}`: '';
 *
 *     super(message);
 *   }
 * }
 *
 * try {
 *   throw new Exception({bar: 'Oh no!'})
 * } catch(e) {
 *   console.log((e as Exception).message);
 *   //  Bar: Oh No!
 * }
 * ```
 */
export type BaseExceptionData<
  T extends IndeterminateObject = IndeterminateObject,
> = CommonExceptionData & T;
