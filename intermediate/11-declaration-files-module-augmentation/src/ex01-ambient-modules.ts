/**
 * EXERCISE 1: Writing `.d.ts` for an external library.
 * 
 * We have an untyped library `vendor-lib` located in `/intermediate/fixtures/vendor-lib`.
 * It provides two methods:
 * - `createId()` -> returns a string
 * - `parseData(str)` -> takes a string, returns `{ payload: string, success: boolean }` or `null`.
 * 
 * GOAL:
 * 1. Read the code below. It imports from `vendor-lib`.
 * 2. TS throws an error because there are no typings.
 * 3. We have provided `src/vendor-lib.d.ts`. Write an ambient module declaration
 *    inside of it that types the `vendor-lib` exports exactly as required.
 */

// FIX ME: This import fails with "Could not find a declaration file for module 'vendor-lib'."
// You must go to `src/vendor-lib.d.ts` and write `declare module "vendor-lib" { ... }`.
import { createId, parseData } from 'vendor-lib';

export function runVendorCode() {
    const id = createId(); // Should resolve to string
    const res = parseData(id); // Should resolve to { payload: string, success: boolean } | null

    return { id, res };
}
