import { TypeValidator } from '../TypeValidator';


export class StringValidator implements TypeValidator {

  matches(value: string): boolean {
    return typeof value === 'string' || (value as any) instanceof String;
  }

  parse(value: string) {
    return value;
  }
}
