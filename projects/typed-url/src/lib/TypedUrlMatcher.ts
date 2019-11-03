import { UrlSegment, UrlSegmentGroup, UrlMatchResult, Route } from '@angular/router';
import { TypeValidator } from './TypeValidator';
import { IntValidator } from './validators/IntValidator';
import { StringValidator } from './validators/StringValidator';
import { RegexValidator } from './validators/RegexValidator';
import { EnumValidator } from './validators/EnumValidator';
import { ParameterTypeCollection, TypedUrlConfig, ParameterType } from './typedUrl';
import { defaultUrlMatcher } from './defaultUrlMatcher';
import { TypedParam } from './params/TypedParam';
import { debug } from './utils';


export class TypedUrlMatcher {

  private validators: { [name: string]: TypeValidator; };

  constructor(
    private path: string,
    private types: ParameterTypeCollection,
    private config: TypedUrlConfig
  ) { }


  initialize() {

    const probe = defaultUrlMatcher(this.path.split('/').map(_ => new UrlSegment(_, {})), new UrlSegmentGroup([], {}), { path: this.path });
    const parameterNames = Object.keys(probe!.posParams!);

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

    if (this.config.debug && this.config.verbose) debug.log(`TypedUrlMatcher: Run for path fragment '${this.path}' url: '${segments.map(_ => _.path).join('/')}'`);

    const res = defaultUrlMatcher(segments, segmentGroup, routeWithPath);
    if (!res) {
      if (this.config.debug) debug.warn(`TypedUrlMatcher: The url fragment does not match to the provided path '${this.path}' url: '${segments.map(_ => _.path).join('/')}'`);
      return null;
    }

    if (!res.posParams) {
      return res;
    }

    const parameterNames = Object.keys(res.posParams);

    for (const key of parameterNames) {
      const segment = res.posParams[key];
      const validator = this.validators[key];

      if (!validator) {
        if (this.config.debug) debug.warn(`TypedUrlMatcher: No validator found for parameter '${key}' and type: '${this.types[key]}'`);
        return null;
      }

      const path = segment.path as TypedParam | string;
      const value = path.toString();

      if (this.config.debug && value === '..') {
        debug.warn(`TypedUrlMatcher: Found '..' in url. Did you intend to navigate back? Try this: router.navigate(['../../', 'user', 12], {relativeTo: this.route}) for a route like: { matcher: typedUrl('user/:id', …), … }`);
      }

      if (!validator.matches(value)) {
        if (this.config.debug) debug.warn(`TypedUrlMatcher: The value '${value}' is not valid for parameter '${key}' and type: '${this.types[key]}'`);
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
