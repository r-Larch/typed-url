import { ParamMap } from '@angular/router';
import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypedParamMap } from './TypedParamMap';


/**
 * Converts the `route.paramMap` of the `ActivatedRoute` to a `TypedParamMap`
 * which can be used to read typed parameters.
 * Use it as rxjs operator!
 *
 * **Before using this make sure if `getTypedParams<T>()` fits your needs**
 *
 * Example:
 *
 * ```typescript
 * this.route.paramMap
 *   .pipe(typedParams())
 *   .subscribe(_ => {
 *     this.userId = _.get<number>('id');
 *     this.userName = _.get<string>('name');
 *   });
 * ```
 */
export function typedParams(): OperatorFunction<ParamMap, TypedParamMap> {
  return map(_ => new TypedParamMap(_));
}

/**
 * Converts the `route.paramMap` of the `ActivatedRoute`
 * to a typed parameters object `TRouteParams`
 * Use it as rxjs operator!
 *
 * Example:
 *
 * ```typescript
 * this.route.paramMap
 *   .pipe(getTypedParams<UserRouteParams>())
 *   .subscribe(_ => {
 *     this.userId = _.id;
 *     this.userName = _.name;
 *   });
 *
 * interface UserRouteParams {
 *   id: number;
 *   name: string;
 * }
 *
 * // use it together with:
 * const routes = [
 *   { matcher: typedUrl<UserRouteParams>('user/:id/:name', { id: 'int', name: 'string' }) }
 * ];
 * ```
 */
export function getTypedParams<TRouteParams>(): OperatorFunction<ParamMap, TRouteParams> {
  return map(_ => new TypedParamMap(_).getParams<TRouteParams>());
}
