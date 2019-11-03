[typed-url](../README.md) › [Globals](../globals.md) › [TypedParamMap](typedparammap.md)

# Class: TypedParamMap

## Hierarchy

* **TypedParamMap**

## Implements

* ParamMap

## Index

### Constructors

* [constructor](typedparammap.md#constructor)

### Properties

* [param](typedparammap.md#private-param)

### Accessors

* [keys](typedparammap.md#keys)

### Methods

* [get](typedparammap.md#get)
* [getAll](typedparammap.md#getall)
* [getParams](typedparammap.md#getparams)
* [has](typedparammap.md#has)

## Constructors

###  constructor

\+ **new TypedParamMap**(`param`: ParamMap): *[TypedParamMap](typedparammap.md)*

*Defined in [lib/parameters/TypedParamMap.ts:5](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/parameters/TypedParamMap.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`param` | ParamMap |

**Returns:** *[TypedParamMap](typedparammap.md)*

## Properties

### `Private` param

• **param**: *ParamMap*

*Defined in [lib/parameters/TypedParamMap.ts:8](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/parameters/TypedParamMap.ts#L8)*

## Accessors

###  keys

• **get keys**(): *string[]*

*Defined in [lib/parameters/TypedParamMap.ts:11](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/parameters/TypedParamMap.ts#L11)*

**Returns:** *string[]*

## Methods

###  get

▸ **get**<**T**>(`name`: string): *T | null*

*Defined in [lib/parameters/TypedParamMap.ts:15](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/parameters/TypedParamMap.ts#L15)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *T | null*

___

###  getAll

▸ **getAll**(`name`: string): *any[]*

*Defined in [lib/parameters/TypedParamMap.ts:19](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/parameters/TypedParamMap.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *any[]*

___

###  getParams

▸ **getParams**<**TParams**>(): *TParams*

*Defined in [lib/parameters/TypedParamMap.ts:23](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/parameters/TypedParamMap.ts#L23)*

**Type parameters:**

▪ **TParams**

**Returns:** *TParams*

___

###  has

▸ **has**(`name`: string): *boolean*

*Defined in [lib/parameters/TypedParamMap.ts:13](https://github.com/r-Larch/typed-url/blob/a524b0e/projects/typed-url/src/lib/parameters/TypedParamMap.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*
