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

Defined in lib/validators/EnumValidator.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`enumValues` | string[] |

**Returns:** *[EnumValidator](enumvalidator.md)*

## Properties

### `Private` enumValues

• **enumValues**: *string[]*

Defined in lib/validators/EnumValidator.ts:7

## Methods

###  matches

▸ **matches**(`value`: string): *boolean*

Defined in lib/validators/EnumValidator.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  parse

▸ **parse**(`value`: string): *string*

Defined in lib/validators/EnumValidator.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*
