/**
 * EXERCISE 1: Custom Type Predicates
 * 
 * When receiving data from an external source (like `JSON.parse`), the
 * data is `unknown`. We need runtime functions that validate the data 
 * AND satisfy the TypeScript compiler so we don't need to use `as User`.
 * 
 * GOAL:
 * 1. Read the `User` interface.
 * 2. Implement the runtime logic for `isUser`.
 * 3. Change `isUser`'s return type to use a Custom Type Predicate (`data is User`) 
 *    instead of just `boolean`.
 * 4. Fix `processData` so it uses the type guard.
 */

export interface User {
    id: string;
    email: string;
}

// TODO: Fix the return signature to be a type predicate: `data is User`
export function isUser(data: unknown): boolean { // FIX ME
    // TODO: Implement the actual pure-JS runtime check here to ensure safety!
    // Hint: Check if it's an object, not null, has string 'id', has string 'email'
    return false; // FIX ME
}

// ------------------------------------------------------------------

export function processData(payload: unknown): string {
    if (isUser(payload)) {
        // If your type predicate is correct, TS will now know `payload` is `User` here.
        return payload.email.toLowerCase(); // FIX ME (TS errors until `isUser` is fixed)
    }
    return 'Invalid User';
}
