/**
 * EXERCISE 3: Function Signatures (`void` vs `undefined`)
 * 
 * In TypeScript, returning `undefined` means "I promise this function returns
 * specifically the value undefined."
 * 
 * Returning `void` means "I don't care what this function returns; the caller
 * should ignore it."
 * 
 * GOAL:
 * 1. Fix the `executeCallback` function signature so that it accepts callbacks
 *    that return `void` (which implicitly accepts callbacks that return anything,
 *    since `void` implies the return value is ignored).
 * 2. Fix the `runAndReturnUndefined` function so that it enforces the callback
 *    and the function itself strict returning of the primitive type `undefined`.
 */

// ------------------------------------------------------------------
// Part 1: Void callbacks (The Flexible Approach)
// ------------------------------------------------------------------

// TODO: The callback type here is too restrictive. It currently requires `undefined`.
// Change it to `void` so that users can pass functions that happen to return a value 
// (like `Array.push`), since `executeCallback` doesn't actually use the return value.
export function executeCallback(cb: () => undefined): void {
    cb();
}

// ------------------------------------------------------------------
// Part 2: Undefined returns (The Strict Approach)
// ------------------------------------------------------------------

// TODO: Fix the return type of this function, AND the type of its callback.
// They both must strictly enforce returning the Javascript primitive `undefined`.
// It is currently typed as `void`, which is too lenient for what this specific 
// domain logic requires.
export function runAndReturnUndefined(cb: () => void): void {
    const result = cb();
    // We ONLY want to return the result if it was literally undefined.
    return result;
}
