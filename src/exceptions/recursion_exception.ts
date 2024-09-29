/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the RecursionException class and its related exception data type.
 */

import { definedArgs } from '../_internal/defined_args.ts';
import { OperationException } from './operation_exception.ts';

import type { SoftwareOperation } from '@kz/common-types';
import type { BaseExceptionData } from '../types/type_aliases.ts';

/**
 * Additional, related data for the {@link RecursionException} class.
 *
 * @example
 * ```ts
 * import type { RecursionExceptionData } from './recursion_exception.ts';
 *
 * const data: RecursionExceptionData = {
 *   operationType: 'process',
 *   operationName: 'foo',
 * };
 *
 * console.assert(data.operationName === 'foo'); // ✔
 * ```
 */
export type RecursionExceptionData = BaseExceptionData<{
  /**
   * The type of software operation the exceeded the max recursion depth.
   */
  operationType?: SoftwareOperation;

  /**
   * The name of the operation that exceeded the max recursion depth.
   */
  operationName?: string;
  /**
   * The max recursion depth.
   */
  recursionDepth?: number;
}>;

/**
 * A `RecursionException` is raised when a software operation exceeds a max recursion depth.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { RecursionException } from './recursion_exception.ts';
 *
 * const exception = new RecursionException();
 * const msg = 'An operation exceeded maximum recursion depth.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 *
 * @example With provided message
 * ```ts
 * import { RecursionException } from './recursion_exception.ts';
 *
 * const exception = new RecursionException('A process reached the bottom.');
 * const msg = 'A process reached the bottom.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { RecursionException } from './recursion_exception.ts';
 *
 * const exception = new RecursionException({ operationName: 'foo', recursionDepth: 5 });
 * const msg = 'An operation, foo, exceeded maximum recursion depth of 5 levels.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { RecursionException } from './recursion_exception.ts';
 *
 * const exception = new RecursionException('A process reached the bottom.', { operationName: 'foo', recursionDepth: 5 });
 * const msg = 'A process reached the bottom.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 */
export class RecursionException<
  T extends RecursionExceptionData = RecursionExceptionData,
> extends OperationException<T> {
  /**
   * Creates a new RecursionException with the default message description.
   */
  constructor();

  /**
   * Creates an RecursionException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an RecursionException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an RecursionException with a message description and additional relevant data.
   *
   * @param message The human-readable description of the exception.
   * @param data Additional, relevant data about the exception.
   */
  constructor(message: string, data: T);

  /**
   * @ignore implementation
   */
  constructor(messageOrData: string | T = DEFAULT_MESSAGE, data: T = {} as T) {
    let message: string;

    if (typeof messageOrData === 'string') {
      message = messageOrData;
    } else {
      data = messageOrData;
      message = createMessageFromData(data);
    }

    message = message || DEFAULT_MESSAGE;

    super(message, data);
  }

  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { RecursionException } from './recursion_exception.ts';
   *
   * const exception = new RecursionException('A process reached the bottom.');
   *
   * console.assert(exception.code === 18); // ✔
   * ```
   */
  public readonly code: number = 0x12;
}

/**
 * The default message for the RecursionException exception.
 */
const DEFAULT_MESSAGE = 'An operation exceeded maximum recursion depth.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: RecursionExceptionData): string {
  const { operationName, operationType, recursionDepth } = data;
  const vowels = 'aeiou';
  const first = operationType?.charAt(0).toLowerCase() || '';
  const A = vowels.includes(first) ? 'An' : 'A';
  const L = recursionDepth === 1 ? 'level' : 'levels';

  switch (true) {
    case definedArgs(operationName, operationType, recursionDepth):
      return `${A} ${operationType}, ${operationName}, exceeded maximum recursion depth of ${recursionDepth} ${L}.`;
    case definedArgs(operationName, recursionDepth):
      return `An operation, ${operationName}, exceeded maximum recursion depth of ${recursionDepth} ${L}.`;
    case definedArgs(operationName, operationType):
      return `${A} ${operationType}, ${operationName}, exceeded maximum recursion depth.`;
    case definedArgs(operationType, recursionDepth):
      return `${A} ${operationType} exceeded maximum recursion depth of ${recursionDepth} ${L}.`;
    case definedArgs(operationName):
      return `An operation, ${operationName}, exceeded maximum recursion depth.`;
    case definedArgs(recursionDepth):
      return `An operation exceeded maximum recursion depth of ${recursionDepth} ${L}.`;
    case definedArgs(operationType):
      return `${A} ${operationType} exceeded maximum recursion depth.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
