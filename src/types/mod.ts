/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports public types from the module.
 *
 * The `@kz/common-exceptions/types` module provides the types used in the `@kz/common-exceptions` module.
 *
 * These types are used to describe the data common to all exceptions and additional, relevant data for an exception.
 * This data is used by the ExceptionExplainer to provide a more detailed explanation of the exception and provide
 * additional context to the user and help with debugging.
 *
 * @module
 */

export type { BaseExceptionData, CommonExceptionData } from './type-aliases.ts';
