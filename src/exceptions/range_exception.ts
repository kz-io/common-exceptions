/**
 * This file exports the RangeException class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { definedArgs } from '../_internals/defined_args.ts';
import { ValueException } from './value_exception.ts';

import type { SoftwareOperation } from '../../deps.ts';
import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the RangeException exception.
 */
export type RangeExceptionData = BaseExceptionData<{
  /**
   * The value that is outside the range of values.
   */
  value?: SoftwareOperation;

  /**
   * The name of the ranged values.
   */
  valueName?: string;

  /**
   * The lower bound, inclusive, of the range.
   */
  lowerBound?: number;

  /**
   * The upper bound, inclusive, of the range.
   */
  upperBound?: number;
}>;

/**
 * An exception raised when a value is outside the range of values.
 */
export class RangeException<T extends RangeExceptionData = RangeExceptionData>
  extends ValueException<T> {
  /**
   * Creates a new RangeException with the default message description.
   */
  constructor();

  /**
   * Creates an RangeException with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an RangeException with a message description created from the exception data.
   *
   * @param data Relevant data about the exception.
   */
  constructor(data: T);

  /**
   * Creates an RangeException with a message description and additional relevant data.
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
  public readonly code: number = 0x28;
}

/**
 * The default message for the RangeException exception.
 */
const DEFAULT_MESSAGE = 'A numeric value is out of range.';

/**
 * Creates a message from the exception data.
 *
 * @param data The exception data.
 * @returns The exception message.
 */
function createMessageFromData(data: RangeExceptionData): string {
  const { lowerBound, upperBound, value, valueName } = data;

  switch (true) {
    case definedArgs(lowerBound, upperBound, value, valueName):
      return `The numeric value, ${value}, of ${valueName} is out of range. It must be between ${lowerBound} and ${upperBound}, inclusive.`;
    case definedArgs(lowerBound, upperBound, value):
      return `A numeric value, ${value}, is out of range. It must be between ${lowerBound} and ${upperBound}, inclusive.`;
    case definedArgs(lowerBound, upperBound, valueName):
      return `The numeric value of ${valueName} is out of range. It must be between ${lowerBound} and ${upperBound}, inclusive.`;
    case definedArgs(lowerBound, value, valueName):
      return `The numeric value, ${value}, of ${valueName} is out of range. It must be greater-than, or equal to, ${lowerBound}.`;
    case definedArgs(upperBound, value, valueName):
      return `The numeric value, ${value}, of ${valueName} is out of range. It must be less-than, or equal to, ${upperBound}.`;
    case definedArgs(lowerBound, upperBound):
      return `A numeric value is out of range. It must be between ${lowerBound} and ${upperBound}, inclusive.`;
    case definedArgs(lowerBound, value):
      return `A numeric value, ${value}, is out of range. It must be greater-than, or equal to, ${lowerBound}.`;
    case definedArgs(lowerBound, valueName):
      return `The numeric value of ${valueName} is out of range. It must be greater-than, or equal to, ${lowerBound}.`;
    case definedArgs(upperBound, value):
      return `A numeric value, ${value}, is out of range. It must be less-than, or equal to, ${upperBound}.`;
    case definedArgs(upperBound, valueName):
      return `The numeric value of ${valueName} is out of range. It must be less-than, or equal to, ${upperBound}.`;
    case definedArgs(value, valueName):
      return `The numeric value, ${value}, of ${valueName} is out of range.`;
    case definedArgs(lowerBound):
      return `A numeric value is out of range. It must be greater-than, or equal to, ${lowerBound}.`;
    case definedArgs(upperBound):
      return `A numeric value is out of range. It must be less-than, or equal to, ${upperBound}.`;
    case definedArgs(value):
      return `A numeric value, ${value}, is out of range.`;
    case definedArgs(valueName):
      return `The numeric value of ${valueName} is out of range.`;
    default:
      return DEFAULT_MESSAGE;
  }
}
