[typed-url](../README.md) › [Globals](../globals.md) › [RegexValidator](regexvalidator.md)

# Class: RegexValidator

## Hierarchy

* **RegexValidator**

## Implements

* [TypeValidator](typevalidator.md)

## Index

### Constructors

* [constructor](regexvalidator.md#constructor)

### Properties

* [config](regexvalidator.md#config)
* [regex](regexvalidator.md#private-regex)

### Methods

* [initialize](regexvalidator.md#initialize)
* [matches](regexvalidator.md#matches)
* [parse](regexvalidator.md#parse)

## Constructors

###  constructor

\+ **new RegexValidator**(`regex`: RegExp): *[RegexValidator](regexvalidator.md)*

Defined in lib/validators/RegexValidator.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`regex` | RegExp |

**Returns:** *[RegexValidator](regexvalidator.md)*

## Properties

###  config

• **config**: *[TypedUrlConfig](../interfaces/typedurlconfig.md)*

Defined in lib/validators/RegexValidator.ts:8

___

### `Private` regex

• **regex**: *RegExp*

Defined in lib/validators/RegexValidator.ts:11

## Methods

###  initialize

▸ **initialize**(`config`: [TypedUrlConfig](../interfaces/typedurlconfig.md)): *void*

Defined in lib/validators/RegexValidator.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`config` | [TypedUrlConfig](../interfaces/typedurlconfig.md) |

**Returns:** *void*

___

###  matches

▸ **matches**(`value`: string): *boolean*

Defined in lib/validators/RegexValidator.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  parse

▸ **parse**(`value`: string): *RegExpExecArray*

Defined in lib/validators/RegexValidator.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *RegExpExecArray*
