/**
 * EXERCISE 4: Recursion Limits (Bounded implementations)
 * 
 * TypeScript has a maximum instantiation depth limit. Unbounded recursive
 * types applied to circular or massive domain models (like the DOM `window`)
 * will crash the compiler.
 * 
 * GOAL:
 * Implement a _bounded_ DeepPartial (`BoundedDeepPartial<T, Depth>`)
 * that accepts a tuple length to count down recursion depth.
 * 
 * E.g., Depth starts at `[1, 1, 1]` for depth 3. Each recursion pops an element.
 * If Depth extends `[]` (empty tuple), return `Partial<T>` (shallow) and stop recursing!
 */

export type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Decrement lookup table

// TODO: Implement BoundedDeepPartial.
// If Depth extends 0, do Partial<T>. 
// Else, do recursive mapping, passing `Prev[Depth]` as the new depth.
export type BoundedDeepPartial<T, Depth extends number = 3> = T; // FIX ME
