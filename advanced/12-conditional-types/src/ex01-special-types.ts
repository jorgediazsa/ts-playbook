/**
 * EXERCISE 1: Detecting Special Types
 * 
 * Top types (any, unknown) and bottom types (never) break naive conditional checks.
 * You must construct precise conditional statements to identify them.
 * 
 * GOAL:
 * 1. Implement `IsNever<T>`. It should return `true` if T is exactly `never`, else `false`.
 * 2. Implement `IsAny<T>`. It should return `true` if T is exactly `any`, else `false`.
 * 3. Implement `IsUnknown<T>`. It should return `true` if T is exactly `unknown`, else `false`.
 */

// 1. IsNever
// Hint: Distribution over an empty union `never` skips evaluation entirely and returns `never`.
// Prevent distribution.
export type IsNever<T> = T; // FIX ME

// 2. IsAny
// Hint: `0 extends (1 & T)` is a known trick. If T is any, `1 & any` is `any`, and `0 extends any` is true. 
// If T is string, `1 & string` is `never`, and `0 extends never` is false.
export type IsAny<T> = T; // FIX ME

// 3. IsUnknown
// Hint: `unknown` acts uniquely against `any`. Everything extends `unknown`.
// How do we differentiate it from `any`? If we use `IsAny`, we can eliminate that case.
export type IsUnknown<T> = T; // FIX ME
