/**
 * EXERCISE 1: Modifiers
 * 
 * Mapped types can manipulate `readonly` and `?` modifiers using `+` and `-`.
 * 
 * GOAL:
 * 1. Implement `Mutable<T>`: Removes all `readonly` modifiers deeply or shallowly? Just shallowly for now.
 * 2. Implement `RequiredKeys<T>`: Return a union of keys from T that are NOT optional.
 * 3. Implement `OptionalKeys<T>`: Return a union of keys from T that ARE optional.
 */

// 1. Mutable
// Hint: Use `-readonly`
export type Mutable<T> = T; // FIX ME

// 2. RequiredKeys
// Hint: A required key `K` in `T` has the property `T extends Record<K, T[K]>`. If it's optional, it doesn't.
// Alternatively, mapped type filtering: `[K in keyof T]-?: {} extends Pick<T, K> ? never : K`
export type RequiredKeys<T> = keyof T; // FIX ME

// 3. OptionalKeys
// Hint: The opposite of RequiredKeys.
export type OptionalKeys<T> = keyof T; // FIX ME
