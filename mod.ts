/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Public API exports for the module.
 *
 * Exception in kz are designed to be as intuitive and informative as possible. They are implemented
 * along-side the Exception Explainer tool, referred to as EX^2, which is a web-based tool that helps developers
 * understand the exceptions that are thrown in their code.
 *
 * All exception in kz are derived from the base {@link Exception} class, which is a generic class that can be
 * extended to create custom exceptions. All exceptions have a constructor signature that accepts a message and
 * additional, relevant data. This additional, relevant data can be any data that a developer may find useful
 * for debugging or handling the exception, this data is provided to the EX^2 tool to help developers understand
 * the exception and its context.
 *
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { Exception } from './mod.ts';
 *
 * const exception = new Exception('An error occurred.', { prev: 'Execution failure' });
 * const url = 'https://docs.integereleven.com/tools/ex2/0x0?message=An%20error%20occurred.&data=%7B%22prev%22%3A%22Execution%20failure%22%7D';
 *
 * assertEquals(exception.message, 'An error occurred.');
 * assertEquals(exception.data, { prev: 'Execution failure' });
 * assertEquals(exception.helpUrl, url);
 * ```
 *
 * Some exceptions may have data properties that are specific to
 * the exception type and can be used without an exception message to create a new instance of the exception,
 * with an exception message that is programmatically generated from the supplied data.
 *
 * ```ts ignore
 * import { assertEquals } from '@std/assert';
 * import { ExternalException } from './external_exception.ts';
 *
 * const exception = new ExternalException({externalName: '@i11n/async'});
 *
 * assertEquals(exception.message, 'An external codebase, @i11n/async, raised an exception.');
 * ```
 *
 * ## Core exception hierarchy
 *
 * * {@link Exception}
 *  * {@link InvalidException}
 *    * {@link NotImplementedException}
 *    * {@link NotSupportedException}
 *    * {@link ValueException}
 *      * {@link ArgumentException}
 *      * {@link AssertionException}
 *      * {@link DecoratorException}
 *      * {@link FormatException}
 *      * {@link NotFoundException}
 *        * {@link MethodException}
 *          * {@link KeyException}
 *      * {@link RangeException}
 *        * {@link IndexException}
 *          * {@link ArgumentIndexException}
 *  * {@link OperationException}
 *    * {@link ExternalException}
 *    * {@link IterationException}
 *    * {@link RecursionException}
 *    * {@link TimeoutException}
 *  * {@link OSException}
 *    * {@link ConnectionException}
 *    * {@link DiskException}
 *    * {@link InterruptException}
 *    * {@link MemoryException}
 *    * {@link ProcessException}
 *
 * @module
 */

export * from './src/mod.ts';
