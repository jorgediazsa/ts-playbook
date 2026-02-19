/**
 * EXERCISE 2: Preventing Distribution (NoDistribute wrapper)
 * 
 * When checking if a union strictly extends another union, distributive
 * conditionals spread the union out, resulting in a union of booleans `true | false`
 * instead of strictly checking the whole union at once.
 * 
 * GOAL:
 * 1. Read the `IsStringOrNumber<T>` type.
 * 2. It distributes when passed a union, causing bugs.
 * 3. Rewrite it into `StrictIsStringOrNumber<T>` using tuple wrappers `[T]`
 *    so it checks the union _as a whole_ instead of distributing.
 */

// Buggy Type
export type IsStringOrNumber<T> = T extends string | number ? true : false; // Distributes

// TODO: Fix this by wrapping the generics in tuples to prevent distribution.
export type StrictIsStringOrNumber<T> = T; // FIX ME
