import { TypeValidator } from '../TypeValidator';


export class EnumValidator implements TypeValidator {

  constructor(
    private enumValues: string[]
  ) { }

  matches(value: string): boolean {
    return this.enumValues.includes(value);
  }

  parse(value: string) {
    return value;
  }
}
