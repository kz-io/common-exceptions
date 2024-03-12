/**
 * This file exports the base Exception class and its related exception data type.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

import { I11N_DOCS_HOST, I11N_EX2_PATH } from '../_internals/constants.ts';

import type { IHelpful } from '../../deps.ts';
import type { BaseExceptionData } from '../types/types.ts';

/**
 * Additional data about the Exception exception.
 */
export type ExceptionData = BaseExceptionData;

/**
 * A generic exception, and the base exception from which all other kz.io exceptions are derived.
 */
export class Exception<T extends ExceptionData = ExceptionData> extends Error
  implements IHelpful {
  /**
   * The exception’s additional data properties.
   */
  protected exceptionProps: T;

  /**
   * Creates an Exception with a message description.
   *
   * @param message A human-readable description of the exception.
   */
  constructor(message: string);

  /**
   * Creates an Exception with a message description and additional relevant data.
   *
   * @param message A human-readable description of the exception.
   * @param data Additional, relevant data about the exception.
   */
  constructor(message: string, data: T);
  /**
   * Creates a new Exception instance.
   *
   * @param message A human-readable description of the exception.
   * @param data Additional, relevant data about the exception.
   */
  constructor(message: string, data?: T) {
    super(message);

    const props = data || {} as T;

    this.exceptionProps = props;
  }

  /**
   * The numeric code unique to this type of exception.
   */
  public readonly code: number = 0x0;

  /**
   * The name for this type of exception.
   */
  public get name(): string {
    const { name } = this.constructor;

    return name;
  }

  /**
   * The URL referencing help for this type of exception.
   */
  public get helpUrl(): string {
    const { message } = this;

    const baseUrl = this.getHelpBaseUrl();
    const encodedData = this.getUrlEncodedData();
    const encodedCause = this.getUrlEncodedCause();

    const encodedMessage = encodeURIComponent(message);

    const messageParam = encodedMessage ? `message=${encodedMessage}` : '';
    const dataParam = encodedData ? `data=${encodedData}` : '';
    const causeParam = encodedCause ? `cause=${encodedCause}` : '';

    const parts = [messageParam, dataParam, causeParam];
    const clearedParts = parts.filter((part) => part);
    const hasParams = clearedParts.length > 0;

    if (!hasParams) {
      return baseUrl;
    }

    const urlParams = clearedParts.join('&');
    const helpUrl = `${baseUrl}?${urlParams}`;

    return helpUrl;
  }

  /**
   * Returns the base URL for the help documentation for this exception.
   *
   * @returns The base URL for the help documentation for this exception.
   */
  protected getHelpBaseUrl(): string {
    const { code } = this;
    const codeHex = code.toString(16);
    const codeHexString = `0x${codeHex}`;
    const baseUrl = `${I11N_DOCS_HOST}/${I11N_EX2_PATH}/${codeHexString}`;

    return baseUrl;
  }

  /**
   * Returns the `data` property, URL-encoded.
   *
   * @returns The `data` property, URL-encoded.
   */
  protected getUrlEncodedData(): string {
    const { data } = this;
    const dataString = data ? JSON.stringify(data) : '';
    const encodedData = encodeURIComponent(dataString);

    return encodedData;
  }

  /**
   * Returns the `cause` property, URL-encoded.
   *
   * @returns The `cause` property, URL-encoded.
   */
  protected getUrlEncodedCause(): string {
    const { cause } = this;

    if (!cause) {
      return '';
    }

    if (cause instanceof Exception) {
      const causeString = JSON.stringify({ helpUrl: cause.helpUrl });
      const encodedCause = encodeURIComponent(causeString);

      return encodedCause;
    }

    const causeString = JSON.stringify(cause);
    const encodedCause = encodeURIComponent(causeString);

    return encodedCause;
  }

  /**
   * The inner cause, or more original, cause of the exception.
   */
  public get cause(): Error | undefined {
    const { cause } = this.exceptionProps;

    return cause;
  }

  /**
   * The remaining properties from the data properties, with the cause property removed.
   */
  public get data(): Omit<T, 'cause'> | undefined {
    const { cause: _cause, ...data } = this.exceptionProps;

    const hasData = Object.keys(data).length > 0;
    const result = hasData ? data : undefined;

    return result;
  }

  /**
   * Returns a numeric code unique to this type of exception.
   *
   * @returns A numeric code unique to this type of exception.
   */
  public valueOf(): number {
    const { code } = this;

    return code;
  }

  /**
   * Returns a human-readable description of the exception.
   *
   * @returns A human-readable description of the exception.
   */
  public toString(): string {
    const { name, message } = this;
    const result = `${name}: ${message}`;

    return result;
  }
}
