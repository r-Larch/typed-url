

export class TypedParam<T = any> {
  constructor(
    public original: string,
    public value: T
  ) { }

  toString() {
    return this.original;
  }
}

export type TypedParamValue<T = any> = TypedParam<T> & string;
