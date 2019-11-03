/*
 * Public API Surface of typed-url
 */

import { typedUrl } from './lib/typedUrl';
import { TypeValidator } from './lib/TypeValidator';
import { typedParams, getTypedParams } from './lib/params/typedParams';

export {
  // create typed-url
  typedUrl,
  TypeValidator,

  // read typed-params
  typedParams,
  getTypedParams
};
