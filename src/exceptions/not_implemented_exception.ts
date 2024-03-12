/**
 * This file exports the NotImplementedException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { InvalidException } from './invalid_exception.ts';

import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the NotImplementedException exception.
 */
export type NotImplementedExceptionData = BaseExceptionData<{
  /**
   * The name of the method that is not implemented.
   */
  methodName?: string;
}>;

/**
 * An exception raised when a class method is not implemented.
 */
export class NotImplementedException<
  T extends NotImplementedExceptionData = NotImplementedExceptionData,
> extends InvalidException<T> {
  /**
   * Creates a new NotImplementedException with the default message description.
   */
  constructor();

  /**
   * Creates an NotImplementedException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an NotImplementedException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an NotImplementedException with a message description and additional relevant data.
   *
   * @param message The human-readable description of the exception.
   * @param data Additional, relevant data about the exception.
   */
  constructor(message: string, data: T);

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
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x22;
}

/**
 * The default message for the NotImplementedException exception.
 */
const DEFAULT_MESSAGE = 'A class method is not implemented.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: NotImplementedExceptionData): string {
  const { methodName } = data;

  switch (true) {
    case definedArgs(methodName):
      return `A class method, ${methodName}, is not implemented.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
