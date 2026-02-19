/**
 * EXERCISE 1: Standard Utilities
 * 
 * Re-implement the global `Partial`, `Required`, `Readonly`, and `Record` 
 * utilities without using the built-in ones.
 * 
 * GOAL:
 * 1. Implement `MyPartial<T>`. It should make all exact properties optional.
 * 2. Implement `MyRequired<T>`. It should remove optional modifiers.
 * 3. Implement `MyReadonly<T>`. It should add `readonly` modifiers to all properties.
 * 4. Implement `MyRecord<K, T>`. It should take a union of keys `K` and assign `T`.
 */

export type MyPartial<T> = T; // FIX ME

export type MyRequired<T> = T; // FIX ME

export type MyReadonly<T> = T; // FIX ME

// Ensure K is constrained to valid object keys (string | number | symbol)
export type MyRecord<K, T> = T; // FIX ME

// ------------------------------------------------------------------
// The structures below are used by type-tests to verify your logic

export interface Todo {
    title: string;
    description?: string;
    completed: boolean;
}
