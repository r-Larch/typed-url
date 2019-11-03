import { UrlSegment, UrlSegmentGroup, Route, UrlMatchResult } from '@angular/router';

// tslint:disable: no-non-null-assertion

/**
 * The Angular default url matcher!
 * Copyied from: https://github.com/angular/angular/blob/ac9d044cad4fee47ed6bfd44f905b546b41952cc/packages/router/src/shared.ts#L121
 * Find the newest version here: https://github.com/angular/angular/blob/master/packages/router/src/shared.ts
 */
// Matches the route configuration (`route`) against the actual URL (`segments`).
export function defaultUrlMatcher(segments: UrlSegment[], segmentGroup: UrlSegmentGroup, route: Route): UrlMatchResult | null {
  const parts = route.path!.split('/');

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
