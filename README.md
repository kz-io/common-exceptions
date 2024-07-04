<p align="center">
<img alt="kz logo" height="64" src="https://raw.githubusercontent.com/i11n/.github/main/svg/kz/color/kz.svg" />
<strong>common-exceptions</strong>
</p>

<p align="center">
kz is a library providing heavily tested and documented features with consistent and predictable APIs designed to simplify the development and maintenance of complex, performant, and scalable <a href="https://deno.com">Deno</a> applications.
</p>

<h1 align="center">@kz/common-exceptions</h1>

<p align="center">
The <code>@kz/core/exceptions</code> module provides commonly used exceptions with intuitive APIs.
</p>

<p align="center">
<a href="https://jsr.io/@kz/common-exceptions">Overview</a> |
<a href="https://jsr.io/@kz/common-exceptions/doc">API Docs</a>
</p>

All exceptions begin with the `Exception` base class, accepting a message, and optional exception data. All exceptions have a single common exception data property, `cause`, which acts as the inner exception or error, if one was unable to be handled gracefully. Any data that is deemed relevant to the exception can be added to the exception data, though some exceptions have named data properties which are especially relevant.

```jsx
import { assertInstanceOf, assertEquals } from '@std/assert';
import { Exception, KeyException } from './mod.ts';

const keyExc = new KeyException(
  `The 'name' key does not exist.`,
  {
    id: '82hffd03',
    action: 'hfjkdhak',
    key: 'key', //named property
 });

assertInstanceOf(keyExc, KeyException);
assertInstanceOf(keyExc, Exception);

assertEquals(keyExc.message, `The 'name' key does not exist.`);
```

When a message is provided, the exception data is simply along for the ride, useful where developers see fit. Some exceptions can also accept only exception data, of which the named data properties are used to construct the exception message. For integereleven-created exceptions, they also provide insight to the exception explainer tool.

```jsx
import { assertEquals } from '@std/assert';
import { KeyException } from './mod.ts';

const keyExc = new KeyException({
	key: 'name',
	validKeys: ['first', 'last']
});

const expected = 'Unable to locate a property key, name, on an object. Valid property keys include: first, last.';

assertEquals(keyExc.message, expected);
```

Exceptions are created in a hierarchy, and those on the outer branches have the generated message functionality. we use the hierarchy to provide better exception handling.

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
