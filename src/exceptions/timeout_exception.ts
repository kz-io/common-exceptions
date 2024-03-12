/**
 * This file exports the TimeoutException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { OperationException } from './operation_exception.ts';

import type { SoftwareOperation } from '../../deps.ts';
import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the TimeoutException exception.
 */
export type TimeoutExceptionData = BaseExceptionData<{
  /**
   * The type of software operation that timed out.
   */
  operationType?: SoftwareOperation;

  /**
   * The name of the operation that timed out.
   */
  operationName?: string;
  /**
   * The operation timeout.
   */
  operationTimeout?: number;
}>;

/**
 * An exception raised when a software operation has timed out.
 */
export class TimeoutException<
  T extends TimeoutExceptionData = TimeoutExceptionData,
> extends OperationException<T> {
  /**
   * Creates a new TimeoutException with the default message description.
   */
  constructor();

  /**
   * Creates an TimeoutException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an TimeoutException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an TimeoutException with a message description and additional relevant data.
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
  public readonly code: number = 0x14;
}

/**
 * The default message for the TimeoutException exception.
 */
const DEFAULT_MESSAGE = 'An operation timed out.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: TimeoutExceptionData): string {
  const { operationName, operationTimeout, operationType } = data;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = operationType ? operationType[0].toLowerCase() : 'd';
  const AN = vowels.includes(firstLetter) ? 'An' : 'A';

  switch (true) {
    case definedArgs(operationName, operationTimeout, operationType):
      return `${AN} ${operationType}, ${operationName}, timed out after ${operationTimeout}ms.`;
    case definedArgs(operationName, operationTimeout):
      return `An operation, ${operationName}, timed out after ${operationTimeout}ms.`;
    case definedArgs(operationName, operationType):
      return `${AN} ${operationType}, ${operationName}, timed out.`;
    case definedArgs(operationTimeout, operationType):
      return `${AN} ${operationType} timed out after ${operationTimeout}ms.`;
    case definedArgs(operationName):
      return `An operation, ${operationName}, timed out.`;
    case definedArgs(operationTimeout):
      return `An operation timed out after ${operationTimeout}ms.`;
    case definedArgs(operationType):
      return `${AN} ${operationType} timed out.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
