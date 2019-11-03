import { TypeValidator } from '../TypeValidator';


export class IntValidator implements TypeValidator {

  matches(value: string): boolean {
    return (/^(\d+)$/.test(value.toString()) && parseInt(value, 10).toString() === value);
  }

  parse(value: string) {
    return parseInt(value, 10);
  }
}
