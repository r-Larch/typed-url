import { ParamMap } from '@angular/router';
import { TypedParamValue } from './TypedParam';


export class TypedParamMap implements ParamMap {

  constructor(
    private param: ParamMap
  ) { }

  get keys() { return this.param.keys; }

  has(name: string) { return this.param.has(name); }

  get<T = string>(name: string): T | null {
    return (this.param.get(name) as TypedParamValue<T>).value;
  }

  getAll(name: string): any[] {
    return this.param.getAll(name);
  }

  getParams<TParams = any>(): TParams {
    return this.param.keys.reduce((o, key) => {
      o[key] = this.get(key);
      return o;
    }, {}) as TParams;
  }
}
