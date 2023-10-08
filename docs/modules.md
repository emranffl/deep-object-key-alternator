# deep-object-key-alternator

## Functions

### deepObjectKeyAlternator

▸ **deepObjectKeyAlternator**<`T`\>(`inputObject`, `keyMapping?`): `DeepKeyMapping`<`T`\>

Recursively parses an object/array, applying a key mapping to rename the keys.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputObject` | `T` | The input object to be parsed. |
| `keyMapping` | `Record`<`string`, `string`\> \| `Partial`<`KeyMapping`<`DeepKeyMapping`<`T`\>\>\> | An object specifying key mapping rules. |

#### Returns

`DeepKeyMapping`<`T`\>

A new object with keys renamed according to the key mapping.

**`Example`**

```ts
const inputObject = {
 foo: "bar",
 baz: {
  qux: "quux"
  }
}

const keyMapping = {
 foo: "boo",
 qux: "que"
}

const parsedObject = deepObjectKeyAlternator(inputObject, keyMapping)

console.log(parsedObject)
// {
//  boo: "bar",
//  baz: {
//   que: "quux"
//   }
// }
```

#### Defined in

index.ts:43
