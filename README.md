# deep-object-key-alternator

![npm version](https://img.shields.io/npm/v/deep-object-key-alternator.svg?style=flat)
![Code Size](https://img.shields.io/github/languages/code-size/emranffl/deep-object-key-alternator)
![GitHub license](https://img.shields.io/github/license/emranffl/deep-object-key-alternator.svg?style=flat)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Jest Tests](https://img.shields.io/badge/Jest%20Tests-Passed-brightgreen.svg)
![GitHub Actions/CI](https://github.com/emranffl/deep-object-key-alternator/workflows/Node.js%20CI/badge.svg)
[![npm downloads](https://img.shields.io/npm/dm/deep-object-key-alternator.svg?style=flat)](https://www.npmjs.com/package/deep-object-key-alternator)

<!-- ![GitHub search hit counter](https://img.shields.io/github/search/emranffl/deep-object-key-alternator/object) -->

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)

## Getting Started

[deepObjectKeyAlternator](./docs/modules.md) is a versatile utility function that allows you to recursively parse an object or array of objects, applying a key mapping to rename object keys. It's particularly handy when you need to transform the structure of nested objects while preserving the original data.

## Installation

You can install `deep-object-key-alternator` using `npm`:

```bash
npm install deep-object-key-alternator
```

or `yarn`:

```bash
yarn add deep-object-key-alternator
```

or `pnpm`:

```bash
pnpm add deep-object-key-alternator
```

## Features

- Recursively parses nested objects.
- Customizable key mapping with intellisense support.
- Supports arrays (without intellisense support).
- Preserves the structure of arrays.

## Usage

Here's how you can use `deepObjectKeyAlternator` in your projects:

### ECMAScript Modules (ESM) Import

```ts
import { deepObjectKeyAlternator } from "deep-object-key-alternator"
```

### CommonJS (CJS) Import

```ts
const { deepObjectKeyAlternator } = require("deep-object-key-alternator")
```

## Examples

### For Objects (with intellisense support)

```ts
import { deepObjectKeyAlternator } from "deep-object-key-alternator"
// or const { deepObjectKeyAlternator } = require("deep-object-key-alternator")

// Define your input object
const inputObject = {
  id: 95,
  name: "Your Input Data",
  // ... Your input data ...
}

// Use deepObjectKeyAlternator to parse the object
const parsedObject = deepObjectKeyAlternator(inputObject, {
  id: "customId",
  name: "customName",
  // ... Your key mapping ...
})

console.log(parsedObject)
// {
//   customId: 95,
//   customName: 'Your Input Data',
//   // ... Your input data ...
// }
```

### For Arrays (without intellisense support)

```ts
import { deepObjectKeyAlternator } from "deep-object-key-alternator"
// or const { deepObjectKeyAlternator } = require("deep-object-key-alternator");

// Define an array of objects
const inputArray = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
  // ... More items ...
]

// Use deepObjectKeyAlternator to parse the array of objects
const parsedArray = inputArray.map((item) => {
  return deepObjectKeyAlternator(item, {
    id: "customId",
    name: "customName",
    // ... Your key mapping ...
  })
})

console.log(parsedArray)
// [
//   {
//     customId: 1,
//     customName: 'Item 1',
//     // ... Your input data ...
//   },
//   {
//     customId: 2,
//     customName: 'Item 2',
//     // ... Your input data ...
//   },
//   // ... More items ...
// ]
```

## License

This package is licensed under the [MIT License](https://tlo.mit.edu/learn-about-intellectual-property/software-and-open-source-licensing/open-source-licensing) - see the [LICENSE](LICENSE) file for details.
