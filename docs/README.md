[typed-url](README.md) › [Globals](globals.md)

# typed-url

# typed-url
> Angular Router helper for typed URL parameters.

## Installation

typed-url is available as an NPM package. You can install typed-url
in your Angular project as usual:

```bash
$ npm install typed-url --save-dev
```

## What it does

It allows applying type constraints to angular router URL route parameters.

Consider the URL `/user/:id/:name`. One could wish to only allow integers
numbers in place of `:id` **typed-url makes this posible**.

Build-in types

| type              | syntax                    | result type      |
|-------------------|---------------------------|------------------|
| integer           | 'int'                     | number           |
| string            | 'string'                  | string           |
| regex             | /^regex$/                 | RegExpMatchArray |
| enum              | ['val1', 'val2']          | string           |
| custom validators | new CustomTypeValidator() | depends on you 😁|

## Usage

** app-routing.module.ts **
```typescript
import { typedUrl } from 'typed-url';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cars-list', 
    children: [
      // this route only matchs for valid url params
      {
        matcher: typedUrl<CarListRouteParams>(':sort/:sortDir/:color/:constructed/:make', {
          sort: ['name', 'make', 'constructed'],
          sortDir: ['asc', 'desc'],
          color: /^([1-9a-f]{6})$/, // regex produces the result type `RegExpMatchArray`
          constructed: 'int',
          make: 'string'
        }),
        component: CarListComponent
      },
      // catch all invalid and redirect back to default filter.
      { path: '**', redirectTo: 'name/asc/red/2019/audi' }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

** CarListComponent **
```typescript
import { getTypedParams } from 'typed-url';

export interface CarListRouteParams {
  sort: 'name' | 'make' | 'constructed';
  sortDir: 'asc' | 'desc';
  color: RegExpMatchArray;
  constructed: number;
  make: string;
}

@Component({selector: 'car-list'})
export class CarListComponent {
  constructor(
    public route: ActivatedRoute
  ) {
    this.route.paramMap
      .pipe(getTypedParams<CarListRouteParams>())
      .subscribe(_ => {
        // all params have the correct type
        const sort = _.sort;
        const sortDir = _.sortDir;
        const color = _.color[0]; // because it's of type `RegExpMatchArray`
        const constructed = _.constructed;
        const make = _.make;

        import { isNumber } from 'util';

        console.assert( isNumber(constructed) ); // shows -> true
      });
  }
}
```

### Specialized usage - custom TypeValidator

For the above example one could write a custom TypeValidator
for the `CarListRouteParams.color` field.

```typescript
class HexColorValidator extends TypeValidator {

  matches(value: string): boolean {
    return /^([1-9a-f]{6})$/.test(value);
  }

  parse(value: string) {
    return `#${value}`;
  }
}

// and use it like:
const routes = [
  { 
    matcher: typedUrl<ColorRouteParams>(':color', {
      color: new HexColorValidator()
    }),
    component: ColorComponent
  }
];

interface ColorRouteParams {
  color: string;
}
```

## Docs

Coming soon..
