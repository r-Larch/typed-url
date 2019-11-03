[typed-url](../README.md) › [Globals](../globals.md) › [TypedUrlMatcher](typedurlmatcher.md)

# Class: TypedUrlMatcher

## Hierarchy

* **TypedUrlMatcher**

## Index

### Constructors

* [constructor](typedurlmatcher.md#constructor)

### Properties

* [config](typedurlmatcher.md#private-config)
* [path](typedurlmatcher.md#private-path)
* [types](typedurlmatcher.md#private-types)
* [validators](typedurlmatcher.md#private-validators)

### Methods

* [getValidatorForType](typedurlmatcher.md#getvalidatorfortype)
* [initialize](typedurlmatcher.md#initialize)
* [urlMatcher](typedurlmatcher.md#urlmatcher)

## Constructors

###  constructor

\+ **new TypedUrlMatcher**(`path`: string, `types`: [ParameterTypeCollection](../globals.md#parametertypecollection), `config`: [TypedUrlConfig](../interfaces/typedurlconfig.md)): *[TypedUrlMatcher](typedurlmatcher.md)*

Defined in lib/TypedUrlMatcher.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`types` | [ParameterTypeCollection](../globals.md#parametertypecollection) |
`config` | [TypedUrlConfig](../interfaces/typedurlconfig.md) |

**Returns:** *[TypedUrlMatcher](typedurlmatcher.md)*

## Properties

### `Private` config

• **config**: *[TypedUrlConfig](../interfaces/typedurlconfig.md)*

Defined in lib/TypedUrlMatcher.ts:20

___

### `Private` path

• **path**: *string*

Defined in lib/TypedUrlMatcher.ts:18

___

### `Private` types

• **types**: *[ParameterTypeCollection](../globals.md#parametertypecollection)*

Defined in lib/TypedUrlMatcher.ts:19

___

### `Private` validators

• **validators**: *object*

Defined in lib/TypedUrlMatcher.ts:15

#### Type declaration:

* \[ **name**: *string*\]: [TypeValidator](typevalidator.md)

## Methods

###  getValidatorForType

▸ **getValidatorForType**(`type`: [ParameterType](../globals.md#parametertype)): *[TypeValidator](typevalidator.md) | null*

Defined in lib/TypedUrlMatcher.ts:96

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ParameterType](../globals.md#parametertype) |

**Returns:** *[TypeValidator](typevalidator.md) | null*

___

###  initialize

▸ **initialize**(): *void*

Defined in lib/TypedUrlMatcher.ts:24

**Returns:** *void*

___

###  urlMatcher

▸ **urlMatcher**(`segments`: UrlSegment[], `segmentGroup`: UrlSegmentGroup, `route`: Route): *UrlMatchResult | null*

Defined in lib/TypedUrlMatcher.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`segments` | UrlSegment[] |
`segmentGroup` | UrlSegmentGroup |
`route` | Route |

**Returns:** *UrlMatchResult | null*
