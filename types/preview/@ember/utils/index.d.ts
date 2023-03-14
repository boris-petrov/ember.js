declare module '@ember/utils' {
  import { TypeOf } from '@ember/utils/-private/types';

  /**
   * Compares two javascript values and returns:
   */
  export function compare(v: unknown, w: unknown): number;

  /**
   * A value is blank if it is empty or a whitespace string.
   */
  export function isBlank(obj?: unknown): boolean;

  /**
   * Verifies that a value is null or undefined, an empty string,
   * or an empty array.
   */
  export function isEmpty(obj?: unknown): boolean;

  /**
   * Compares two objects, returning true if they are equal.
   */
  export function isEqual(a: unknown, b: unknown): boolean;

  /**
   * Returns true if the passed value is null or undefined. This avoids errors
   * from JSLint complaining about use of ==, which can be technically
   * confusing.
   */
  export function isNone(obj?: unknown): obj is null | undefined;

  /**
   * A value is present if it not `isBlank`.
   */
  export function isPresent(obj?: unknown): boolean;

  /**
   * Returns a consistent type for the passed object.
   */
  export function typeOf<T>(value: T): TypeOf<T>;
  export function typeOf(): 'undefined';
}
