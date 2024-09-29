/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the hashData internal function.
 */

import { Exception } from '../exceptions/exception.ts';

/**
 * A function that hashes the relevant data of an exception.
 *
 * @param exc The exception to hash the data of.
 * @returns number The hash of the exception data.
 */
export function hashData(
  exc: Exception,
  id = (Date.now() * Math.floor(Math.random() * 1000)),
): number {
  const name = exc.name;
  const code = exc.code;
  const message = exc.message;
  const data = exc.data;
  const cause = exc.cause;
  const hashableData = { id, name, code, message, cause, data };
  const encodableString = JSON.stringify(hashableData);
  const chars = encodableString.split('');

  const hash = chars.reduce((acc, char) => {
    acc = ((acc << 5) - acc) + char.charCodeAt(0);
    acc = acc & acc;
    return acc;
  }, 0);

  return hash;
}
