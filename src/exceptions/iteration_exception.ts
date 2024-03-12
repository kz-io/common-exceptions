/**
 * This file exports the IterationException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { OperationException } from './operation_exception.ts';

import type { SoftwareOperation } from '../../deps.ts';
import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the IterationException exception.
 */
export type IterationExceptionData = BaseExceptionData<{
  /**
   * The type of software operation that exceeded max iterations.
   */
  operationType?: SoftwareOperation;

  /**
   * The name of the operation that exceeded max iterations.
   */
  operationName?: string;
  /**
   * The maximum number of iterations.
   */
  iterationCount?: number;
  /**
   * Whether repeating values were detected. Typically evidence of an infinite loop.
   */
  repeatingValues?: boolean;
}>;

/**
 * An exception raised when a software operation has exceeded max iterations.
 */
export class IterationException<
  T extends IterationExceptionData = IterationExceptionData,
> extends OperationException<T> {
  /**
   * Creates a new IterationException with the default message description.
   */
  constructor();

  /**
   * Creates an IterationException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an IterationException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an IterationException with a message description and additional relevant data.
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
  public readonly code: number = 0x13;
}

/**
 * The default message for the IterationException exception.
 */
const DEFAULT_MESSAGE =
  'An operation exceeded the maximum number of iterations.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: IterationExceptionData): string {
  const { iterationCount, operationName, operationType, repeatingValues } =
    data;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = operationType ? operationType[0].toLowerCase() : 'o';
  const AN = vowels.includes(firstLetter) ? 'An' : 'A';
  const L = iterationCount === 1 ? 'iteration' : 'iterations';

  switch (true) {
    case definedArgs(
      iterationCount,
      operationName,
      operationType,
      repeatingValues,
    ):
      return `${AN} ${operationType}, ${operationName}, exceeded the maximum number of ${iterationCount} ${L} on consecutive repeating values.`;
    case definedArgs(iterationCount, operationName, operationType):
      return `${AN} ${operationType}, ${operationName}, exceeded the maximum number of ${iterationCount} ${L}.`;
    case definedArgs(iterationCount, operationName, repeatingValues):
      return `${AN} operation, ${operationName}, exceeded the maximum number of ${iterationCount} ${L} on consecutive repeating values.`;
    case definedArgs(iterationCount, operationType, repeatingValues):
      return `${AN} ${operationType} exceeded the maximum number of ${iterationCount} ${L} on consecutive repeating values.`;
    case definedArgs(operationName, operationType, repeatingValues):
      return `${AN} ${operationType}, ${operationName}, exceeded the maximum number of iterations on consecutive repeating values.`;
    case definedArgs(iterationCount, operationName):
      return `${AN} operation, ${operationName}, exceeded the maximum number of ${iterationCount} ${L}.`;
    case definedArgs(iterationCount, operationType):
      return `${AN} ${operationType} exceeded the maximum number of ${iterationCount} ${L}.`;
    case definedArgs(iterationCount, repeatingValues):
      return `An operation exceeded the maximum number of ${iterationCount} ${L} on consecutive repeating values.`;
    case definedArgs(operationName, operationType):
      return `${AN} ${operationType}, ${operationName}, exceeded the maximum number of iterations.`;
    case definedArgs(operationName, repeatingValues):
      return `An operation, ${operationName}, exceeded the maximum number of iterations on consecutive repeating values.`;
    case definedArgs(operationType, repeatingValues):
      return `An ${operationType} exceeded the maximum number of iterations on consecutive repeating values.`;
    case definedArgs(iterationCount):
      return `An operation exceeded the maximum number of ${iterationCount} ${L}.`;
    case definedArgs(operationName):
      return `An operation, ${operationName}, exceeded the maximum number of iterations.`;
    case definedArgs(operationType):
      return `${AN} ${operationType} exceeded the maximum number of iterations.`;
    case definedArgs(repeatingValues):
      return `An operation exceeded the maximum number of iterations on consecutive repeating values.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
