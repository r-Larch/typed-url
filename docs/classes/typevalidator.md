[typed-url](../README.md) › [Globals](../globals.md) › [TypeValidator](typevalidator.md)

# Class: TypeValidator

Extend this type to create custom `TypeValidator`s

Example:

```typescript
class FunValidator extends TypeValidator {
  matches(value: string): boolean {
    return value === 'fun';
  }

  parse(value: string) {
    return `${value}ny`;
  }
}

// use it like:
const routes = [
  { matcher: typedUrl<MyRouteParams>('user/:id', { id: new FunValidator() }) }
];
```

## Hierarchy

* **TypeValidator**

## Implemented by

* [EnumValidator](enumvalidator.md)
* [IntValidator](intvalidator.md)
* [RegexValidator](regexvalidator.md)
* [StringValidator](stringvalidator.md)

## Index

### Methods

* [initialize](typevalidator.md#optional-initialize)
* [matches](typevalidator.md#abstract-matches)
* [parse](typevalidator.md#abstract-parse)

## Methods

### `Optional` initialize

▸ **initialize**(`config`: [TypedUrlConfig](../interfaces/typedurlconfig.md)): *void*

*Defined in [lib/TypeValidator.ts:30](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypeValidator.ts#L30)*

This method can be implemented if the TypeValidator need some one time initialization

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | [TypedUrlConfig](../interfaces/typedurlconfig.md) | The `TypedUrlConfig` provided for `typedUrl(…)`  |

**Returns:** *void*

___

### `Abstract` matches

▸ **matches**(`value`: string): *boolean*

*Defined in [lib/TypeValidator.ts:36](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypeValidator.ts#L36)*

This method gets called to determine whether the provided `value` is of the desired type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | The url path segment  |

**Returns:** *boolean*

___

### `Abstract` parse

▸ **parse**(`value`: string): *any*

*Defined in [lib/TypeValidator.ts:43](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypeValidator.ts#L43)*

This method gets called after the `matches(value)` method returned `true`
Use this method to parse `value` accordingly to the desired type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | The url path segment  |

**Returns:** *any*
