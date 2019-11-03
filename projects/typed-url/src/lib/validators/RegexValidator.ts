import { TypeValidator } from '../TypeValidator';
import { TypedUrlConfig } from '../typedUrl';
import { debug } from '../utils';


export class RegexValidator implements TypeValidator {

  config: TypedUrlConfig;

  constructor(
    private regex: RegExp
  ) { }

  initialize(config: TypedUrlConfig): void {
    if (config.debug) {
      const regex = this.regex.toString();
      if (!regex.includes('^') || !regex.includes('$')) {
        debug.warn(`TypedUrlMatcher: The regex '${regex}' does not validate against the hole segment! Consider adding ^ and $ e.g: /^(some.*thing)$/`);
      }
    }
  }

  matches(value: string): boolean {
    return this.regex.test(value);
  }

  parse(value: string) {
    return this.regex.exec(value);
  }
}
