/**
 * EXERCISE 3: Pattern Matching with `infer`
 * 
 * `infer` allows extracting variables dynamically from an existing type within the
 * true-branch of a conditional.
 * 
 * GOAL:
 * 1. Implement `Flatten<T>`: If T is an array, extract the element type. Otherwise, return T.
 * 2. Implement `UnwrapPromise<T>`: If T is a promise, extract the resolved type.
 *    (Bonus: Recursively unwrap it if it's a Promise of a Promise).
 */

// TODO: Use `T extends Array<infer U>` or `T extends (infer U)[]`
export type Flatten<T> = T; // FIX ME

// TODO: Use `T extends Promise<infer U>`
// To support Promise<Promise<string>>, try applying UnwrapPromise recursively.
export type UnwrapPromise<T> = T; // FIX ME
