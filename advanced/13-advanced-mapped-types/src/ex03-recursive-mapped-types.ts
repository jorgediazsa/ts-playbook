/**
 * EXERCISE 3: Recursive Mapped Types
 * 
 * Deep partials or Deep read-only structures require invoking the mapped
 * type upon itself recursively when the value is an object.
 * 
 * GOAL:
 * 1. Implement `DeepReadonly<T>`.
 * 2. Implement `DeepPartial<T>`.
 * 3. Implement `DeepPick<T, Paths>` (Optional challenge: Can we do picking across nested paths?)
 *    (For the sake of sanity, let's keep it simple: just DeepReadonly and DeepPartial for this exercise).
 */

// 1. DeepReadonly
// Hint: Is T an object? Recursive call. Otherwise, T.
// But beware `Function`, `Date`, etc. are objects. A safe check: `T extends Builtin ? T : T extends object ? ... : T`
// Builtins: Function | Date | RegExp | ... (Keep it simple for this exercise, just assume POJOs)
export type DeepReadonly<T> = T; // FIX ME

// 2. DeepPartial
// Hint: Similar recursion structure to DeepReadonly.
export type DeepPartial<T> = T; // FIX ME
