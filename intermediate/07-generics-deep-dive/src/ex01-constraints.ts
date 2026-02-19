/**
 * EXERCISE 1: Generic Constraints (`extends`)
 * 
 * When writing generic functions that access specific properties, TS needs 
 * to know that those properties exist. `extends` constrains the generic.
 * 
 * GOAL:
 * 1. Read `pluckId`. It attempts to return the `id` from an array of objects.
 * 2. It currently fails to compile because it doesn't know `T` has an `id`.
 * 3. Add a generic constraint to `T` so that it must have an `id: string`.
 * 4. Verify that `pluckId` preserves the exact array types, not just the constraint.
 */

// TODO: Add a constraint to T to ensure it has an `id: string` property.
export function pluckId<T>(items: T[]): string[] {
    return items.map(item => item.id); // FIX ME (Type error here until constraint added)
}
