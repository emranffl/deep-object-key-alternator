# deep-object-key-alternator

![npm version](https://img.shields.io/npm/v/deep-object-key-alternator.svg?style=flat)
![Code Size](https://img.shields.io/github/languages/code-size/emranffl/deep-object-key-alternator)
![GitHub license](https://img.shields.io/github/license/emranffl/deep-object-key-alternator.svg?style=flat)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Jest Tests](https://img.shields.io/badge/Jest%20Tests-Passed-brightgreen.svg)
![GitHub Actions/CI](https://github.com/emranffl/deep-object-key-alternator/workflows/Node.js%20CI/badge.svg)
[![npm downloads](https://img.shields.io/npm/dm/deep-object-key-alternator.svg?style=flat)](https://www.npmjs.com/package/deep-object-key-alternator)

[deepObjectKeyAlternator](./docs/modules.md) is a versatile utility function that allows you to recursively parse an object, applying a key mapping to rename object keys. It's particularly handy when you need to transform the structure of nested objects while preserving the original data.

## Installation

You can install `deep-object-key-alternator` using npm or yarn:

```bash
npm install deep-object-key-alternator

# or

yarn add deep-object-key-alternator

# or

pnpm add deep-object-key-alternator
```

## Usage

Here's how you can use deepObjectKeyAlternator in your projects:

```ts
import { deepObjectKeyAlternator } from "deep-object-key-alternator"
// or
const { deepObjectKeyAlternator } = require("deep-object-key-alternator")

// Define your input object
const inputObject = {
  id: 95,
  name: "Your Input Data",
  // ... Your input data ...
}

// Define a key mapping to rename keys
const keyMapping = {
  id: "customId",
  name: "customName",
  // ... Your key mapping ...
}

// Use deepObjectKeyAlternator to parse the object
const parsedObject = deepObjectKeyAlternator(inputObject, keyMapping)

console.log(parsedObject)
// {
//   customId: 95,
//   customName: 'Your Input Data',
//   // ... Your input data ...
// }
```

## Features

- Recursively parses nested objects.
- Customizable key mapping.
- Preserves the structure of arrays.

## License

This project is licensed under the [MIT License](https://tlo.mit.edu/learn-about-intellectual-property/software-and-open-source-licensing/open-source-licensing) - see the [LICENSE](LICENSE) file for details.
