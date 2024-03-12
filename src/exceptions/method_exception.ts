/**
 * This file exports the MethodException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { NotFoundException } from './not_found_exception.ts';

import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the MethodException exception.
 */
export type MethodExceptionData = BaseExceptionData<{
  /**
   * The name of the method that doesn’t exist.
   */
  methodName?: string;

  /**
   * The name of object value the method doesn’t exist on.
   */
  valueName?: string;

  /**
   * The available methods on the object value.
   */
  validMethods?: string[];
}>;

/**
 * An exception raised when a method does not exist on an object.
 */
export class MethodException<
  T extends MethodExceptionData = MethodExceptionData,
> extends NotFoundException<T> {
  /**
   * Creates a new MethodException with the default message description.
   */
  constructor();

  /**
   * Creates an MethodException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an MethodException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an MethodException with a message description and additional relevant data.
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
  public readonly code: number = 0x2c;
}

/**
 * The default message for the MethodException exception.
 */
const DEFAULT_MESSAGE = 'Unable to locate a method on an object.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: MethodExceptionData): string {
  const { methodName, validMethods, valueName } = data;

  switch (true) {
    case definedArgs(methodName, validMethods, valueName):
      return `Unable to locate a method, ${methodName}, on an object, ${valueName}. Valid methods include: ${
        (validMethods || []).join(', ')
      }.`;
    case definedArgs(methodName, valueName):
      return `Unable to locate a method, ${methodName}, on an object, ${valueName}.`;
    case definedArgs(methodName, validMethods):
      return `Unable to locate a method, ${methodName}, on an object. Valid methods include: ${
        (validMethods || []).join(', ')
      }.`;
    case definedArgs(valueName, validMethods):
      return `Unable to locate a method on an object, ${valueName}. Valid methods include: ${
        (validMethods || []).join(', ')
      }.`;
    case definedArgs(methodName):
      return `Unable to locate a method, ${methodName}, on an object.`;
    case definedArgs(valueName):
      return `Unable to locate a method on an object, ${valueName}.`;
    case definedArgs(validMethods):
      return `Unable to locate a method on an object. Valid methods include: ${
        (validMethods || []).join(', ')
      }.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
