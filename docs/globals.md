[typed-url](README.md) › [Globals](globals.md)

# typed-url

## Index

### Classes

* [EnumValidator](classes/enumvalidator.md)
* [IntValidator](classes/intvalidator.md)
* [RegexValidator](classes/regexvalidator.md)
* [StringValidator](classes/stringvalidator.md)
* [TypeValidator](classes/typevalidator.md)
* [TypedParam](classes/typedparam.md)
* [TypedParamMap](classes/typedparammap.md)
* [TypedUrlMatcher](classes/typedurlmatcher.md)

### Interfaces

* [TypedUrlConfig](interfaces/typedurlconfig.md)

### Type aliases

* [ParameterType](globals.md#parametertype)
* [ParameterTypeCollection](globals.md#parametertypecollection)
* [TypedParamValue](globals.md#typedparamvalue)

### Functions

* [defaultUrlMatcher](globals.md#defaulturlmatcher)
* [getTypedParams](globals.md#gettypedparams)
* [typedParams](globals.md#typedparams)
* [typedUrl](globals.md#typedurl)

### Object literals

* [debug](globals.md#const-debug)

## Type aliases

###  ParameterType

Ƭ **ParameterType**: *"string" | RegExp | [TypeValidator](classes/typevalidator.md) | string[] | "int"*

*Defined in [lib/typedUrl.ts:72](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/typedUrl.ts#L72)*

___

###  ParameterTypeCollection

Ƭ **ParameterTypeCollection**: *object*

*Defined in [lib/typedUrl.ts:67](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/typedUrl.ts#L67)*

#### Type declaration:

___

###  TypedParamValue

Ƭ **TypedParamValue**: *[TypedParam](classes/typedparam.md)‹T› & string*

*Defined in [lib/params/TypedParam.ts:12](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/params/TypedParam.ts#L12)*

## Functions

###  defaultUrlMatcher

▸ **defaultUrlMatcher**(`segments`: UrlSegment[], `segmentGroup`: UrlSegmentGroup, `route`: Route): *UrlMatchResult | null*

*Defined in [lib/defaultUrlMatcher.ts:11](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/defaultUrlMatcher.ts#L11)*

The Angular default url matcher!
Copyied from: https://github.com/angular/angular/blob/ac9d044cad4fee47ed6bfd44f905b546b41952cc/packages/router/src/shared.ts#L121
Find the newest version here: https://github.com/angular/angular/blob/master/packages/router/src/shared.ts

**Parameters:**

Name | Type |
------ | ------ |
`segments` | UrlSegment[] |
`segmentGroup` | UrlSegmentGroup |
`route` | Route |

**Returns:** *UrlMatchResult | null*

___

###  getTypedParams

▸ **getTypedParams**<**TRouteParams**>(): *OperatorFunction‹ParamMap, TRouteParams›*

*Defined in [lib/params/typedParams.ts:55](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/params/typedParams.ts#L55)*

Converts the `route.paramMap` of the `ActivatedRoute`
to a typed parameters object `TRouteParams`
Use it as rxjs operator!

Example:

```typescript
this.route.paramMap
  .pipe(getTypedParams<UserRouteParams>())
  .subscribe(_ => {
    this.userId = _.id;
    this.userName = _.name;
  });

interface UserRouteParams {
  id: number;
  name: string;
}

// use it together with:
const routes = [
  { matcher: typedUrl<UserRouteParams>('user/:id/:name', { id: 'int', name: 'string' }) }
];
```

**Type parameters:**

▪ **TRouteParams**

**Returns:** *OperatorFunction‹ParamMap, TRouteParams›*

___

###  typedParams

▸ **typedParams**(): *OperatorFunction‹ParamMap, [TypedParamMap](classes/typedparammap.md)›*

*Defined in [lib/params/typedParams.ts:25](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/params/typedParams.ts#L25)*

Converts the `route.paramMap` of the `ActivatedRoute` to a `TypedParamMap`
which can be used to read typed parameters.
Use it as rxjs operator!

**Before using this make sure if `getTypedParams<T>()` fits your needs**

Example:

```typescript
this.route.paramMap
  .pipe(typedParams())
  .subscribe(_ => {
    this.userId = _.get<number>('id');
    this.userName = _.get<string>('name');
  });
```

**Returns:** *OperatorFunction‹ParamMap, [TypedParamMap](classes/typedparammap.md)›*

___

###  typedUrl

▸ **typedUrl**<**TRouteParams**>(`path`: string, `types`: [ParameterTypeCollection](globals.md#parametertypecollection)‹TRouteParams›, `config?`: [TypedUrlConfig](interfaces/typedurlconfig.md)): *UrlMatcher*

*Defined in [lib/typedUrl.ts:60](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/typedUrl.ts#L60)*

Creates a `UrlMatcher` to match against a router matching notation while allowing to specify type constraints

Example:

### app-routing.module.ts
```typescript
import { typedUrl } from 'typed-url';
import { UserComponent, UserRouteParams } from './user/user.component';

const routes = [
  {
    matcher: typedUrl<UserRouteParams>('user/:id/:name', {
      id: 'int',
      name: 'string'
    }),
    component: UserComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### user.component.ts
```typescript
import { getTypedParams } from 'typed-url';

export interface UserRouteParams {
  id: number;
  name: string;
}

@Component({selector: 'app-user'})
export class UserComponent {
  constructor(
    public route: ActivatedRoute
  ) {
    this.route.paramMap
      .pipe(getTypedParams<UserRouteParams>())
      .subscribe(_ => {
        this.userId = _.id;
        this.userName = _.name;
      });
  }
}
```

**Type parameters:**

▪ **TRouteParams**

some custom type (type, interface, class) which defines all allowed variabales in `path`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | The path to match against, a URL string that uses router matching notation like: 'user/:id/:name' |
`types` | [ParameterTypeCollection](globals.md#parametertypecollection)‹TRouteParams› | A plain object describing the types for each variabale in `path` like: { id: 'int', name: 'string' } |
`config?` | [TypedUrlConfig](interfaces/typedurlconfig.md) | (optional) Some extra config. Allow enabling of debug mode! |

**Returns:** *UrlMatcher*

## Object literals

### `Const` debug

### ▪ **debug**: *object*

*Defined in [lib/utils.ts:3](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/utils.ts#L3)*

###  log

▸ **log**(`x`: string): *void*

*Defined in [lib/utils.ts:4](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/utils.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *void*

###  warn

▸ **warn**(`x`: string): *void*

*Defined in [lib/utils.ts:5](https://github.com/r-Larch/typed-url/blob/03cb924/projects/typed-url/src/lib/utils.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *void*
