/**
 * This file exports the ArgumentException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { ValueException } from './value_exception.ts';

import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the ArgumentException exception.
 */
export type ArgumentExceptionData = BaseExceptionData<{
  /**
   * The name of the invalid argument.
   */
  argumentName?: string;

  /**
   * The constraints of the argument.
   */
  argumentConstraints?: string[];
}>;

/**
 * An exception raised when an argument has the correct type but has an invalid value.
 */
export class ArgumentException<
  T extends ArgumentExceptionData = ArgumentExceptionData,
> extends ValueException<T> {
  /**
   * Creates a new ArgumentException with the default message description.
   */
  constructor();

  /**
   * Creates an ArgumentException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an ArgumentException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an ArgumentException with a message description and additional relevant data.
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
  public readonly code: number = 0x24;
}

/**
 * The default message for the ArgumentException exception.
 */
const DEFAULT_MESSAGE = 'An argument does not satisfy its constraints.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: ArgumentExceptionData): string {
  const { argumentConstraints, argumentName } = data;

  switch (true) {
    case definedArgs(argumentConstraints, argumentName):
      return `An argument, ${argumentName}, does not satisfy the following constraints:\n- ${
        (argumentConstraints || []).join('\n- ')
      }.`;
    case definedArgs(argumentConstraints):
      return `An argument does not satisfy the following constraints:\n- ${
        (argumentConstraints || []).join('\n- ')
      }.`;
    case definedArgs(argumentName):
      return `An argument, ${argumentName}, does not satisfy its constraints.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
