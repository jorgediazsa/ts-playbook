/**
 * EXERCISE 3: Modern Enum-like Pattern (`as const` + `satisfies`)
 * 
 * In modern TypeScript (2025+), standard JS Objects combined with `as const`
 * are the preferred way to model Enums. This provides maximum safety, perfect 
 * tree-shaking, and zero hidden runtime behavior.
 * 
 * GOAL:
 * 1. Look at `RawErrorCode`. It's a standard JS object, but its inferred type 
 *    is just `{ NOT_FOUND: string; TIMEOUT: string }` because of widening.
 * 2. Add an `as const` assertion to make the values strictly typed literals.
 * 3. Use the `typeof` and indexed access (`[keyof typeof ...]`) tricks to 
 *    create a union type `ErrorCode` out of the object's values.
 * 4. Use the `satisfies` operator to ensure the shape conforms to `Record<string, number>`
 *    so developers can't accidentally add a string value instead of a numeric code later.
 */

// TODO: Fix the declaration below utilizing `as const` and `satisfies`.
// 1. It must validate against `Record<string, number>`
// 2. The derived values must not widen to `number` (they must stay true literals)
export const RawErrorCode = {
    NOT_FOUND: 404,
    TIMEOUT: 408,
    SERVER_ERROR: 500
};

// TODO: Extract the exact literal values from `RawErrorCode` into a union type called `ErrorCode`.
// This is the replacement for using an Enum type directly in function signatures.
export type ErrorCode = any; // FIX ME

// ------------------------------------------------------------------
// Consumer Function
// ------------------------------------------------------------------

// Once you fix the type `ErrorCode`, this function will strictly expect 
// the literals `404 | 408 | 500`.
export function parseError(code: ErrorCode) {
    if (code === RawErrorCode.TIMEOUT) {
        return 'Please try again.';
    }
    return 'Fatal error.';
}
