/**
 * EXERCISE 3: Deep Utilities & Mutability
 * 
 * Standard TS utilities are shallow. A `Partial<User>` makes the top-level
 * properties optional, but nested objects remain strict. We use recursive
 * mapped types to build "Deep" variations.
 * 
 * GOAL:
 * 1. Implement `DeepPartial<T>`. It must make all properties optional, 
 *    and if a property is an object, it must recursively apply `DeepPartial`.
 * 2. Implement `DeepReadonly<T>`.
 * 3. Implement `Mutable<T>`. This is the opposite of `Readonly` (-readonly).
 */

// TODO: Make it deeply optional.
// Hint: T extends object ? ... : T
export type DeepPartial<T> = T; // FIX ME

// TODO: Make it deeply readonly.
export type DeepReadonly<T> = T; // FIX ME

// TODO: Remove readonly modifiers from the object.
// Hint: -readonly
export type Mutable<T> = T; // FIX ME

// ------------------------------------------------------------------

export interface NestedStructure {
    id: string;
    config: {
        retries: number;
        headers: {
            auth: string;
        };
    };
}
