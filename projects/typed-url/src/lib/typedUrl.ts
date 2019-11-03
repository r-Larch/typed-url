import { UrlMatcher } from '@angular/router';
import { TypeValidator } from './TypeValidator';
import { TypedUrlMatcher } from './TypedUrlMatcher';


/**
 * Creates a `UrlMatcher` to match against a router matching notation while allowing to specify type constraints
 *
 * Example:
 *
 * ### app-routing.module.ts
 * ```typescript
 * import { typedUrl } from 'typed-url';
 * import { UserComponent, UserRouteParams } from './user/user.component';
 *
 * const routes = [
 *   {
 *     matcher: typedUrl<UserRouteParams>('user/:id/:name', {
 *       id: 'int',
 *       name: 'string'
 *     }),
 *     component: UserComponent
 *   }
 * ];
 * @NgModule({
 *   imports: [RouterModule.forRoot(routes)],
 *   exports: [RouterModule]
 * })
 * export class AppRoutingModule { }
 * ```
 *
 * ### user.component.ts
 * ```typescript
 * import { getTypedParams } from 'typed-url';
 *
 * export interface UserRouteParams {
 *   id: number;
 *   name: string;
 * }
 *
 * @Component({selector: 'app-user'})
 * export class UserComponent {
 *   constructor(
 *     public route: ActivatedRoute
 *   ) {
 *     this.route.paramMap
 *       .pipe(getTypedParams<UserRouteParams>())
 *       .subscribe(_ => {
 *         this.userId = _.id;
 *         this.userName = _.name;
 *       });
 *   }
 * }
 * ```
 * @param path The path to match against, a URL string that uses router matching notation like: 'user/:id/:name'
 * @param types A plain object describing the types for each variabale in `path` like: { id: 'int', name: 'string' }
 * @param config (optional) Some extra config. Allow enabling of debug mode!
 * @typeparam TRouteParams some custom type (type, interface, class) which defines all allowed variabales in `path`.
 */
export function typedUrl<TRouteParams = any>(path: string, types: ParameterTypeCollection<TRouteParams>, config?: TypedUrlConfig): UrlMatcher {
  const matcher = new TypedUrlMatcher(path, types, config || {});
  matcher.initialize();
  return matcher.urlMatcher as UrlMatcher;
}


export declare type ParameterTypeCollection<TRouteParams = any> = {
  [P in keyof TRouteParams]: ParameterType;
};


export declare type ParameterType = (
  | 'string' // string
  | 'int'    // integer numbers
  | RegExp   // regex /test.*/i
  | string[] // string enum
  | TypeValidator // custom validators: `class CustomValidator extends TypeValidator { .. }`
);


/**
 * Provides some configuration options for `typedUrl(…)`
 */
export declare interface TypedUrlConfig {
  /**
   * Enables the debug mode. Usefull to find out why some route gets not activated
   */
  debug?: boolean;
  /**
   * Use it together with `debug: true`
   */
  verbose?: boolean;
}
