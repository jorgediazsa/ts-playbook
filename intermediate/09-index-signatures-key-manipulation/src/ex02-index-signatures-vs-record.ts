/**
 * EXERCISE 2: Index Signatures vs Mapped Types (`Record`)
 * 
 * An index signature `[key: string]` destroys specificity. 
 * A `Record<K, V>` (Mapped Type) preserves it if `K` is a union of literal strings.
 * 
 * GOAL:
 * 1. Read `RoleDictionary` and `StrictRoleDictionary`.
 * 2. `RoleDictionary` uses an open index signature.
 * 3. Change `StrictRoleDictionary` to use the `Record` utility type so it 
 *    strictly mandates exactly 'ADMIN' and 'USER' keys.
 * 4. See how `StrictRoleDictionary` provides autocomplete and catches errors.
 */

export type Role = 'ADMIN' | 'USER';

// 1. Open Index Signature (Bad for exhaustive maps)
export interface RoleDictionary {
    [key: string]: boolean;
}

export const features1: RoleDictionary = {
    ADMIN: true,
    // Oh no! We forgot 'USER', but TS doesn't care.
    GUEST: false // We added a random key, TS doesn't care.
};

// ------------------------------------------------------------------

// TODO: Refactor `StrictRoleDictionary` to use `Record<Role, boolean>`
export interface StrictRoleDictionary { // FIX ME
    [key: string]: boolean;
}

// FIX ME: Once you update StrictRoleDictionary, TS will explicitly fail here 
// complaining about missing 'USER' and rejecting 'GUEST'.
export const features2: StrictRoleDictionary = {
    ADMIN: true,
    GUEST: false // TS will error on GUEST.
};
