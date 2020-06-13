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

*Defined in [lib/TypedUrlMatcher.ts:15](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypedUrlMatcher.ts#L15)*

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

*Defined in [lib/TypedUrlMatcher.ts:20](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypedUrlMatcher.ts#L20)*

___

### `Private` path

• **path**: *string*

*Defined in [lib/TypedUrlMatcher.ts:18](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypedUrlMatcher.ts#L18)*

___

### `Private` types

• **types**: *[ParameterTypeCollection](../globals.md#parametertypecollection)*

*Defined in [lib/TypedUrlMatcher.ts:19](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypedUrlMatcher.ts#L19)*

___

### `Private` validators

• **validators**: *object*

*Defined in [lib/TypedUrlMatcher.ts:15](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypedUrlMatcher.ts#L15)*

#### Type declaration:

* \[ **name**: *string*\]: [TypeValidator](typevalidator.md)

## Methods

###  getValidatorForType

▸ **getValidatorForType**(`type`: [ParameterType](../globals.md#parametertype)): *[TypeValidator](typevalidator.md) | null*

*Defined in [lib/TypedUrlMatcher.ts:96](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypedUrlMatcher.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ParameterType](../globals.md#parametertype) |

**Returns:** *[TypeValidator](typevalidator.md) | null*

___

###  initialize

▸ **initialize**(): *void*

*Defined in [lib/TypedUrlMatcher.ts:24](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypedUrlMatcher.ts#L24)*

**Returns:** *void*

___

###  urlMatcher

▸ **urlMatcher**(`segments`: UrlSegment[], `segmentGroup`: UrlSegmentGroup, `route`: Route): *UrlMatchResult | null*

*Defined in [lib/TypedUrlMatcher.ts:51](https://github.com/r-Larch/typed-url/blob/ab194d7/projects/typed-url/src/lib/TypedUrlMatcher.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`segments` | UrlSegment[] |
`segmentGroup` | UrlSegmentGroup |
`route` | Route |

**Returns:** *UrlMatchResult | null*
