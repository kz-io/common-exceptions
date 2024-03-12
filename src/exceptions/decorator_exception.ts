/**
 * This file exports the DecoratorException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { ValueException } from './value_exception.ts';

import type { DecoratorTarget } from '../../deps.ts';
import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the DecoratorException exception.
 */
export type DecoratorExceptionData = BaseExceptionData<{
  /**
   * The type of decorator that failed to apply.
   */
  decoratorTarget?: DecoratorTarget;

  /**
   * The name of the decorator that failed to apply.
   */
  decoratorName?: string;
}>;

/**
 * An exception raised when a decorator fails to apply.
 */
export class DecoratorException<
  T extends DecoratorExceptionData = DecoratorExceptionData,
> extends ValueException<T> {
  /**
   * Creates a new DecoratorException with the default message description.
   */
  constructor();

  /**
   * Creates an DecoratorException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an DecoratorException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an DecoratorException with a message description and additional relevant data.
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
  public readonly code: number = 0x26;
}

/**
 * The default message for the DecoratorException exception.
 */
const DEFAULT_MESSAGE = 'A decorator failed to apply.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: DecoratorExceptionData): string {
  const { decoratorTarget, decoratorName } = data;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = decoratorTarget ? decoratorTarget[0].toLowerCase() : 'd';
  const AN = vowels.includes(firstLetter) ? 'An' : 'A';

  switch (true) {
    case definedArgs(decoratorTarget, decoratorName):
      return `${AN} ${decoratorTarget} decorator, ${decoratorName}, failed to apply.`;
    case definedArgs(decoratorTarget):
      return `${AN} ${decoratorTarget} decorator failed to apply.`;
    case definedArgs(decoratorName):
      return `A decorator, ${decoratorName}, failed to apply.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
