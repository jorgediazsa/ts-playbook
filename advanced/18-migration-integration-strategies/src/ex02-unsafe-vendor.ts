/**
 * EXERCISE 2: Unsafe Vendor Defaults
 * 
 * We are using a 3rd party library `fake-analytics`. Its type definitions are WRONG.
 * It claims `capture()` returns a `boolean` synchronously, but at runtime it actually 
 * returns a `Promise<boolean>`.
 * 
 * GOAL:
 * 1. Do NOT use `capture` directly.
 * 2. Implement the `safeCapture` wrapper below.
 * 3. Use `unknown` boundaries or forceful type assertions to isolate the lie 
 *    and expose the TRUE type signature (`Promise<boolean>`) to our app.
 */

// Notice we are importing from a local fixture rather than node_modules for this exercise
import { capture } from '../fixtures/vendor-unsafe';

export async function safeCapture(event: string): Promise<boolean> {
    // FIX ME: The compiler thinks 'capture' returns boolean, 
    // but we know it actually returns a Promise<boolean>.
    // We must cast it to unknown first, then to the correct Promise, then await it.

    const result = capture(event);
    return result as any; // Replace `any` with the correct safe pattern
}
