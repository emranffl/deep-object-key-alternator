# deep-object-key-alternator

## Functions

### deepObjectKeyAlternator

▸ **deepObjectKeyAlternator**<`T`\>(`inputObject`, `keyMapping?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DeepObject` \| `DeepArrayMapping`<`DeepObject`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputObject` | `T` |
| `keyMapping` | `Record`<`string`, `string`\> \| `Partial`<`KeyMapping`<`T` extends `DeepArrayMapping`<`DeepObject`\> ? `DeepArrayMapping`<`DeepObject`\> : `T`\>\> |

#### Returns

`T`

#### Defined in

index.ts:11
