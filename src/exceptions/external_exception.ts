/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the ExternalException class and its related exception data type.
 */

import { definedArgs } from '../_internal/mod.ts';
import { OperationException } from './operation_exception.ts';

import type { Codebase } from '@kz/common-types';
import type { BaseExceptionData } from '../types/mod.ts';

/**
 * Additional, related data for the {@link ExternalException} class.
 *
 * @example
 * ```ts
 * import type { ExternalExceptionData } from './external_exception.ts';
 *
 * const data: ExternalExceptionData = {
 *   externalName: 'foo',
 *   externalType: 'library',
 * };
 *
 * console.assert(data.externalName === 'foo'); // ✔
 * ```
 */
export type ExternalExceptionData = BaseExceptionData<{
  /**
   * The type of external codebase that raised an exception.
   */
  externalType?: Codebase;

  /**
   * The name of the external codebase that raised an exception.
   */
  externalName?: string;
}>;

/**
 * An `ExternalException` is raised when an external codebase raised an exception.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example No arguments - default message
 * ```ts
 * import { ExternalException } from './external_exception.ts';
 *
 * const exception = new ExternalException();
 * const msg = 'An external codebase raised an exception.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 *
 * @example With provided message
 * ```ts
 * import { ExternalException } from './external_exception.ts';
 *
 * const exception = new ExternalException('An external library encountered an issue.');
 * const msg = 'An external library encountered an issue.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 *
 * @example With provided relevant data
 * ```ts
 * import { ExternalException } from './external_exception.ts';
 *
 * const exception = new ExternalException({ externalName: 'foo' });
 * const msg = 'An external codebase, foo, raised an exception.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 *
 * @example With provided message and relevant data
 * ```ts
 * import { ExternalException } from './external_exception.ts';
 *
 * const exception = new ExternalException('An external library encountered an issue.', { externalName: 'foo' });
 * const msg = 'An external library encountered an issue.';
 *
 * console.assert(exception.message === msg); // ✔
 * ```
 */
export class ExternalException<
  T extends ExternalExceptionData = ExternalExceptionData,
> extends OperationException<T> {
  /**
   * Creates a new instance of the `ExternalException` class with the default message description.
   */
  constructor();

  /**
   * Creates a new instance of the `ExternalException` class with the specified message description.
   *
   * @param message The exception message description.
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `ExternalException` class with the specified relevant data, resulting in a generated message description.
   *
   * @param data The relevant data for the exception.
   */
  constructor(data: T);

  /**
   * Creates a new instance of the `ExternalException` class with the specified message description and additional, relevant data.
   *
   * @param message The exception message description.
   * @param data The additional, relevant data for the exception.
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
   * import { ExternalException } from './external_exception.ts';
   *
   * const exception = new ExternalException('An external library encountered an issue.');
   *
   * console.assert(exception.code === 17); // ✔
   * ```
   */
  public readonly code: number = 0x11;
}

/**
 * The default message for the {@link ExternalException} exception.
 */
const DEFAULT_MESSAGE = 'An external codebase raised an exception.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: ExternalExceptionData): string {
  const { externalName, externalType } = data;

  switch (true) {
    case definedArgs(externalName, externalType):
      return `An external ${externalType}, ${externalName}, raised an exception.`;
    case definedArgs(externalName):
      return `An external codebase, ${externalName}, raised an exception.`;
    case definedArgs(externalType):
      return `An external ${externalType} raised an exception.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
