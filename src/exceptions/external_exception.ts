/**
 * This file exports the ExternalException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { OperationException } from './operation_exception.ts';

import type { Codebase } from '../../deps.ts';
import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the ExternalException exception.
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
 * An exception raised when an external codebase raised an exception.
 */
export class ExternalException<
  T extends ExternalExceptionData = ExternalExceptionData,
> extends OperationException<T> {
  /**
   * Creates a new ExternalException with the default message description.
   */
  constructor();

  /**
   * Creates an ExternalException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an ExternalException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an ExternalException with a message description and additional relevant data.
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
  public readonly code: number = 0x11;
}

/**
 * The default message for the ExternalException exception.
 */
const DEFAULT_MESSAGE = 'An external codebase raised an exception.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: ExternalExceptionData): string {
  const { externalType, externalName } = data;

  switch (true) {
    case definedArgs(externalType, externalName):
      return `An external ${externalType}, ${externalName}, raised an exception.`;
    case definedArgs(externalType):
      return `An external ${externalType} raised an exception.`;
    case definedArgs(externalName):
      return `An external codebase, ${externalName}, raised an exception.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
