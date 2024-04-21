<p align="center">
<img alt="kz logo" height="48" src="https://raw.githubusercontent.com/i11n/.github/main/svg/kz/color/kz.svg" />
<strong>common-exceptions</strong>
</p>

<p align="center">
kz is a collection of easy-to-use utility and feature libraries for creating anything you want with the <a href="https://deno.com">Deno</a> runtime.
</p>

<h1 align="center">@kz/common-exceptions</h1>

<p align="center">
A collection of the most common exceptions used across kz packages, adapted for API consistency and case-coverage, exhaustively tested, and documented thoroughly.
</p>

<p align="center">
<a href="https://jsr.io/@kz/common-exceptions">Overview</a> | 
<a href="https://jsr.io/@kz/common-exceptions/doc">API Docs</a>
</p>


Exceptions in kz are designed to be as intuitive and informative as possible. They are implemented
along-side the Exception Explainer tool, referred to as ex^2, which is a web-based tool that helps developers
understand the exceptions that are thrown in their code.

All exceptions in kz are derived from the base `Exception` class, which can be
extended to create custom exceptions. All exceptions have a constructor signature that accepts a message and
additional data. This additional data can be any data that a developer may find useful
for debugging or handling the exception, this data is provided to the ex^2 tool to help developers understand
the exception and its context.

```ts
import { assertEquals } from '@std/assert';
import { Exception } from './mod.ts';

const exception = new Exception('An error occurred.', { prev: 'Execution failure' });
const url = 'https://docs.integereleven.com/tools/ex2/0x0?message=An%20error%20occurred.&data=%7B%22prev%22%3A%22Execution%20failure%22%7D';

assertEquals(exception.message, 'An error occurred.');
assertEquals(exception.data, { prev: 'Execution failure' });
assertEquals(exception.helpUrl, url);
```

Some exceptions have data properties that are especially relevant to
the exception type and can be used without an exception message to create a new instance of the exception,
with an exception message that is programmatically generated from the supplied data.

```ts ignore
import { assertEquals } from '@std/assert';
import { ExternalException } from './mod.ts';

const exception = new ExternalException({externalName: '@i11n/async'});

assertEquals(exception.message, 'An external codebase, @i11n/async, raised an exception.');
```

## Contributing

Contributions are welcome! Take a look at our [contributing guidelines][contributing] to get started.

<p align="center">
<a href="https://github.com/i11n/.github/blob/main/.github/CODE_OF_CONDUCT.md">
  <img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=flat-square" />
</a>
</p>

## License

The MIT License (MIT) 2022 integereleven. Refer to [LICENSE][license] for details.

<p align="center">
<sub>Built with ❤ by integereleven</sub>
</p>

<p align="center">
<img
  alt="kz.io logo"
  height="64"
  src="https://raw.githubusercontent.com/i11n/.github/main/svg/brand/color/open-stroke.svg"
/>
</p>

<p align="center">
<a href="https://github.com/kz-io/common-exceptions/commits">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/kz-io/common-exceptions?style=flat-square">
</a>
<a href="https://github.com/kz-io/common-exceptions/issues">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/kz-io/common-exceptions?style=flat-square">
</a>
<a href="https://codecov.io/gh/kz-io/common-exceptions" >
  <img src="https://codecov.io/gh/kz-io/common-exceptions/graph/badge.svg?token=EK5CNEBUPG"/>
</a>
</p>

<p align="center">
<a href="https://jsr.io/@kz/common-exceptions">
  <img src="https://jsr.io/badges/@kz/common-exceptions" alt="" />
</a>
<a href="https://jsr.io/@kz/common-exceptions">
  <img src="https://jsr.io/badges/@kz/common-exceptions/score" alt="" />
</a>
</p>

[deno]: https://deno.dom "Deno homepage"
[jsr]: https://jsr.io "JSR homepage"
[branches]: https://github.com/kz-io/common-exceptions/branches "@kz/common-exceptions branches on GitHub"
[releases]: https://github.com/kz-io/common-exceptions/releases "@kz/common-exceptions releases on GitHub"
[contributing]: https://github.com/kz-io/common-exceptions/blob/main/CONTRIBUTING.md "@kz/common-exceptions contributing guidelines"
[license]: https://github.com/kz-io/common-exceptions/blob/main/LICENSE "@kz/common-exceptions license"
