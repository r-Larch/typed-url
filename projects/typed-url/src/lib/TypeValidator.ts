import { TypedUrlConfig } from './typedUrl';

/**
 * Extend this type to create custom `TypeValidator`s
 *
 * Example:
 *
 * ```typescript
 * class FunValidator extends TypeValidator {
 *   matches(value: string): boolean {
 *     return value === 'fun';
 *   }
 *
 *   parse(value: string) {
 *     return `${value}ny`;
 *   }
 * }
 *
 * // use it like:
 * const routes = [
 *   { matcher: typedUrl<MyRouteParams>('user/:id', { id: new FunValidator() }) }
 * ];
 * ```
 */
export abstract class TypeValidator {
  /**
   * This method can be implemented if the TypeValidator need some one time initialization
   * @param config The `TypedUrlConfig` provided for `typedUrl(…)`
   */
  initialize?(config: TypedUrlConfig): void;

  /**
   * This method gets called to determine whether the provided `value` is of the desired type
   * @param value The url path segment
   */
  abstract matches(value: string): boolean;

  /**
   * This method gets called after the `matches(value)` method returned `true`
   * Use this method to parse `value` accordingly to the desired type.
   * @param value The url path segment
   */
  abstract parse(value: string): any;
}
