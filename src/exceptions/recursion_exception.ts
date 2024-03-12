/**
 * This file exports the RecursionException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { OperationException } from './operation_exception.ts';

import type { SoftwareOperation } from '../../deps.ts';
import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the RecursionException exception.
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
 * An exception raised when a software operation exceeds a max recursion depth.
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
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = operationType ? operationType[0].toLowerCase() : 'o';
  const AN = vowels.includes(firstLetter) ? 'An' : 'A';
  const L = recursionDepth === 1 ? 'level' : 'levels';

  switch (true) {
    case definedArgs(operationName, operationType, recursionDepth):
      return `${AN} ${operationType}, ${operationName}, exceeded maximum recursion depth of ${recursionDepth} ${L}.`;
    case definedArgs(operationName, recursionDepth):
      return `${AN} operation, ${operationName}, exceeded maximum recursion depth of ${recursionDepth} ${L}.`;
    case definedArgs(operationName, operationType):
      return `${AN} ${operationType}, ${operationName}, exceeded maximum recursion depth.`;
    case definedArgs(operationType, recursionDepth):
      return `${AN} ${operationType} exceeded maximum recursion depth of ${recursionDepth} ${L}.`;
    case definedArgs(operationName):
      return `${AN} operation, ${operationName}, exceeded maximum recursion depth.`;
    case definedArgs(recursionDepth):
      return `An operation exceeded maximum recursion depth of ${recursionDepth} ${L}.`;
    case definedArgs(operationType):
      return `${AN} ${operationType} exceeded maximum recursion depth.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
