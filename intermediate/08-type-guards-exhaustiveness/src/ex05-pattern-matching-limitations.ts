/**
 * EXERCISE 5: Pattern Matching Limitations
 * 
 * TypeScript evaluates Control Flow Analysis (CFA) sequentially, meaning 
 * things like "mutating objects via callbacks" or "correlated unions" 
 * will break its tracking.
 * 
 * GOAL:
 * 1. Read `processForm`. It has an explicit type check `if (form.type === 'LOGIN')`.
 * 2. It creates an async callback `setTimeout`.
 * 3. Inside the callback, TS forgets that `form` was narrowed to `LOGIN` because it 
 *    assumes the global object might have been mutated before the macro-task runs.
 * 4. Fix the code inside `processForm` so TS preserves the type safely WITHOUT using `as`.
 *    (Hint: Capture the narrowed state before the callback).
 */

export type FormState =
    | { type: 'LOGIN'; username: string }
    | { type: 'RESET_PASSWORD'; email: string };

export function processForm(form: FormState, callback: (username: string) => void) {
    if (form.type === 'LOGIN') {
        // We are narrowed to LOGIN here!

        setTimeout(() => {
            // FIX ME: We are inside a callback. TS thinks `form` might have mutated 
            // back into a generic `FormState` in the time it took to run this!
            callback(form.username);
        }, 100);
    }
}
