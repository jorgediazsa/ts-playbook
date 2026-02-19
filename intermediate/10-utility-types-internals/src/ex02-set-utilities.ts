/**
 * EXERCISE 2: Set Utilities and Distributive Conditionals
 * 
 * Set operators (`Exclude`, `Extract`) work by feeding unions into 
 * distributive conditional types `T extends U ? X : Y`.
 * 
 * Mapped set operators (`Pick`, `Omit`) combine `Keyof` with those set
 * operators. 
 * 
 * GOAL:
 * Re-implement the global utility types `Exclude`, `Extract`, `NonNullable`, 
 * `Pick`, and `Omit` from scratch to prove you understand their internal engines.
 */

// 1. MyExclude<T, U>: Exclude from T those types that are assignable to U
export type MyExclude<T, U> = T; // FIX ME

// 2. MyExtract<T, U>: Extract from T those types that are assignable to U
export type MyExtract<T, U> = T; // FIX ME

// 3. MyNonNullable<T>: Exclude null and undefined from T
export type MyNonNullable<T> = T; // FIX ME

// 4. MyPick<T, K>: From T, pick a set of properties whose keys are in the union K
export type MyPick<T, K extends keyof T> = T; // FIX ME

// 5. MyOmit<T, K>: Construct a type with the properties of T except for those in type K.
// Hint: You should build this completely out of `MyPick` and `MyExclude`.
export type MyOmit<T, K extends keyof any> = T; // FIX ME

// ------------------------------------------------------------------

export interface User {
    id: string;
    name: string;
    email: string | null;
    age?: number;
}
