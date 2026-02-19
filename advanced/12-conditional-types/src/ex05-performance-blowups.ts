/**
 * EXERCISE 5: Performance Blowups and Simplification
 * 
 * Deeply nested conditional types can crash the compiler with 
 * "Type instantiation is excessively deep and possibly infinite."
 * 
 * Even if it doesn't crash, it severely degrades IDE performance.
 * 
 * GOAL:
 * 1. Read `OverEngineeredResponse`. It uses massive conditional logic.
 * 2. Refactor it into a mapped type or an index-access lookup to make it linear (O(1) resolve).
 */

type ExtractRole<T> = T extends 'admin'
    ? { role: 'admin'; privileges: string[] }
    : T extends 'user'
    ? { role: 'user'; profile: string }
    : T extends 'guest'
    ? { role: 'guest' }
    : never;

// TODO: The recursive lookup above is slow if we add 50 roles.
// Refactor this into an interface + Indexed Access (`RoleMap[T]`)
// so lookup is instantaneous.

// FIX ME: Remove the conditional gymnastics and map to `RoleMap`.
export type FastExtractRole<T extends string> = ExtractRole<T>;

export interface RoleMap {
    // Define mapping here
}
