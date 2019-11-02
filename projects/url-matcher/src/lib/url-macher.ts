import { UrlSegment, UrlSegmentGroup, UrlMatchResult, UrlMatcher, Route } from '@angular/router';
import { isString } from 'util';

// tslint:disable: no-use-before-declare
// tslint:disable: no-shadowed-variable
// tslint:disable: curly

export function typedUrl(path: string, types: ParameterTypeCollection, config?: TypedUrlMatcherConfig): UrlMatcher {
  const matcher = new TypedUrlMatcher(path, types, config || {});
  matcher.initialize();
  return matcher.urlMatcher;
}


declare type ParameterType = (
  | 'string' // string
  | 'int'    // integer numbers
  | RegExp   // regex /test.*/i
  | string[] // string enum
  | TypeValidator // custom validators: `class CustomValidator extends TypeValidator { .. }`
);

declare interface ParameterTypeCollection { [name: string]: ParameterType; }
declare interface TypedUrlMatcherConfig { debug?: boolean; verbose?: boolean; }


class TypedUrlMatcher {

  private validators: { [name: string]: TypeValidator };

  constructor(
    private path: string,
    private types: ParameterTypeCollection,
    private config: TypedUrlMatcherConfig
  ) { }

  initialize() {

    const probe = defaultUrlMatcher(this.path.split('/').map(_ => new UrlSegment(_, {})), new UrlSegmentGroup([], {}), { path: this.path });
    const parameterNames = Object.keys(probe.posParams);

    this.validators = {};
    for (const key of parameterNames) {
      const type = this.types[key];
      if (!type) {
        throw new Error(`TypedUrlMatcher: The ParameterTypeCollection is missing a type for parameter: '${key}'. path: '${this.path}'`);
      }

      const validator = this.getValidatorForType(type);
      if (!validator) {
        throw new Error(`TypedUrlMatcher: No Validator found for type: '${type}' used for parameter: '${key}'. path: '${this.path}'`);
      }

      if (validator.initialize) {
        validator.initialize(this.config);
      }

      this.validators[key] = validator;
    }
  }

  urlMatcher = (segments: UrlSegment[], segmentGroup: UrlSegmentGroup, route: Route): UrlMatchResult | null => {
    const routeWithPath = { ...route, path: this.path };

    if (this.config.debug && this.config.verbose) console.log(`TypedUrlMatcher: Run for path fragment '${this.path}' url: '${segments.map(_ => _.path).join('/')}'`);

    const res = defaultUrlMatcher(segments, segmentGroup, routeWithPath);
    if (!res) {
      if (this.config.debug) console.warn(`TypedUrlMatcher: The url fragment does not match to the provided path '${this.path}' url: '${segments.map(_ => _.path).join('/')}'`);
      return null;
    }

    const parameterNames = Object.keys(res.posParams);

    for (const key of parameterNames) {
      const segment = res.posParams[key];
      const validator = this.validators[key];

      if (!validator) {
        if (this.config.debug) console.warn(`TypedUrlMatcher: No validator found for parameter '${key}' and type: '${this.types[key]}'`);
        return null;
      }

      const path = segment.path as TypedParam | string | null;
      const value = path == null ? null : path.toString();

      if (!validator.matchs(value)) {
        if (this.config.debug) console.warn(`TypedUrlMatcher: The value '${value}' is not valid for parameter '${key}' and type: '${this.types[key]}'`);
        return null;
      }

      segment.path = new TypedParam(value, validator.parse(value)) as any as string;
    }

    return res;
  }


  getValidatorForType(type: ParameterType): TypeValidator | null {
    if (type instanceof Array) {
      return new EnumValidator(type);
    }
    else if (type === 'int') {
      return new IntValidator();
    }
    else if (type === 'string') {
      return new StringValidator();
    }
    else if (type instanceof RegExp) {
      return new RegexValidator(type);
    }
    else if (type instanceof TypeValidator) {
      return type;
    }
    else {
      return null;
    }
  }
}


export abstract class TypeValidator {
  initialize?(config: TypedUrlMatcherConfig): void;
  abstract matchs(value: string | null): boolean;
  abstract parse(value: string): any;
}


class EnumValidator implements TypeValidator {
  constructor(
    private enumValues: string[]
  ) { }

  matchs(value: string | null): boolean {
    return this.enumValues.includes(value);
  }

  parse(value: string) {
    return value;
  }
}

class IntValidator implements TypeValidator {
  matchs(value: string | null): boolean {
    return value != null && (/^(\d+)$/.test(value.toString()) && parseInt(value, 10).toString() === value);
  }

  parse(value: string) {
    return parseInt(value, 10);
  }
}

class StringValidator implements TypeValidator {
  matchs(value: string | null): boolean {
    return isString(value);
  }

  parse(value: string) {
    return value;
  }
}

class RegexValidator implements TypeValidator {
  config: TypedUrlMatcherConfig;

  constructor(
    private regex: RegExp
  ) { }

  initialize(config: TypedUrlMatcherConfig): void {
    if (config.debug) {
      const regex = this.regex.toString();
      if (!regex.includes('^') || !regex.includes('$')) {
        console.warn(`TypedUrlMatcher: The regex '${regex}' does not validate against the hole segment! Consider adding ^ and $ e.g: /^(some.*thing)$/`);
      }
    }
  }

  matchs(value: string | null): boolean {
    return this.regex.test(value);
  }

  parse(value: string) {
    return this.regex.exec(value);
  }
}


export class TypedParam<T = any> extends String {
  constructor(
    original: string,
    public value: T
  ) {
    super(original);
  }
}

export declare type TypedParamValue<T = any> = TypedParam<T> & string;


/**
 * The Angular default url matcher!
 * Copyied from: https://github.com/angular/angular/blob/ac9d044cad4fee47ed6bfd44f905b546b41952cc/packages/router/src/shared.ts#L121
 * Find the newest version here: https://github.com/angular/angular/blob/master/packages/router/src/shared.ts
 */
// Matches the route configuration (`route`) against the actual URL (`segments`).
function defaultUrlMatcher(segments: UrlSegment[], segmentGroup: UrlSegmentGroup, route: Route): UrlMatchResult | null {
  const parts = route.path.split('/');

  if (parts.length > segments.length) {
    // The actual URL is shorter than the config, no match
    return null;
  }

  if (route.pathMatch === 'full' &&
    (segmentGroup.hasChildren() || parts.length < segments.length)) {
    // The config is longer than the actual URL but we are looking for a full match, return null
    return null;
  }

  const posParams: { [key: string]: UrlSegment } = {};

  // Check each config part against the actual URL
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part.startsWith(':');
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      // The actual URL part does not match the config, no match
      return null;
    }
  }

  return { consumed: segments.slice(0, parts.length), posParams };
}
