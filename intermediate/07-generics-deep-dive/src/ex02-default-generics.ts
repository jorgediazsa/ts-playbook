/**
 * EXERCISE 2: Default Generics
 * 
 * Default generics improve developer experience by providing sensible 
 * fallbacks for type parameters that are usually identical across usages.
 * 
 * GOAL:
 * 1. Read `Result`. It models a success/failure pattern.
 * 2. It currently requires TWO type arguments, e.g., `Result<User, Error>`.
 * 3. Most of the time, the error type is just the standard `Error` class.
 * 4. Add a default generic type to `E` so `Result<T>` is perfectly valid 
 *    and assumes `E = Error`.
 */

// TODO: Make E default to the built-in `Error` type.
export type Result<T, E> =
    | { success: true; data: T }
    | { success: false; error: E };

export function fetchUser(): Result<{ name: string }> { // FIX ME: Expected 2 arguments, but got 1.
    return {
        success: false,
        error: new Error('Network timeout')
    };
}
