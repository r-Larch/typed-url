[typed-url](../README.md) › [Globals](../globals.md) › [EnumValidator](enumvalidator.md)

# Class: EnumValidator

## Hierarchy

* **EnumValidator**

## Implements

* [TypeValidator](typevalidator.md)

## Index

### Constructors

* [constructor](enumvalidator.md#constructor)

### Properties

* [enumValues](enumvalidator.md#private-enumvalues)

### Methods

* [matches](enumvalidator.md#matches)
* [parse](enumvalidator.md#parse)

## Constructors

###  constructor

\+ **new EnumValidator**(`enumValues`: string[]): *[EnumValidator](enumvalidator.md)*

*Defined in [lib/validators/EnumValidator.ts:4](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/validators/EnumValidator.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`enumValues` | string[] |

**Returns:** *[EnumValidator](enumvalidator.md)*

## Properties

### `Private` enumValues

• **enumValues**: *string[]*

*Defined in [lib/validators/EnumValidator.ts:7](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/validators/EnumValidator.ts#L7)*

## Methods

###  matches

▸ **matches**(`value`: string): *boolean*

*Defined in [lib/validators/EnumValidator.ts:10](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/validators/EnumValidator.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  parse

▸ **parse**(`value`: string): *string*

*Defined in [lib/validators/EnumValidator.ts:14](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/validators/EnumValidator.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*
