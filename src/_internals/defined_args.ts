/**
 * This file exports the definedArgs function.
 *
 * @copyright 2024 integereleven. All rights reserved. MIT license.
 */

/**
 * Checks if all of the arguments are defined.
 *
 * @param args The arguments to check for definedness.
 * @returns True if all of the arguments are defined, false otherwise.
 */
export function definedArgs(...args: unknown[]): boolean {
  for (const arg of args) {
    if (!(arg ?? false)) {
      return false;
    }
  }

  return true;
}
