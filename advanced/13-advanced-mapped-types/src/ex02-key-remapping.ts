/**
 * EXERCISE 2: Key Remapping (`as`)
 * 
 * You can rename or filter keys dynamically while iterating.
 * 
 * GOAL:
 * 1. Implement `PrefixKeys<T, P>`: Prefixes every string key with `P`.
 * 2. Implement `RenameKeys<T, R>`: Takes a map `R` of oldKey -> newKey and renames the keys in `T`.
 */

// 1. PrefixKeys
// Given { id: string }, PrefixKeys<T, "user_"> should be { user_id: string }
// Hint: Use template literals inside the `as` clause. Be careful to only map string keys.
export type PrefixKeys<T, P extends string> = T; // FIX ME

// 2. RenameKeys
// Given { id: string, name: string } and R = { id: 'userId' }, it should become { userId: string, name: string }
// Hint: In the `as` clause, check if K extends keyof R. If so, cast to R[K], else keep K.
export type RenameKeys<T, R extends Record<string, string>> = T; // FIX ME
