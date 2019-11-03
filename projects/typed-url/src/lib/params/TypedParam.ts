

export class TypedParam<T = any> extends String {
  constructor(
    original: string,
    public value: T
  ) {
    super(original);
  }
}

export type TypedParamValue<T = any> = TypedParam<T> & string;
