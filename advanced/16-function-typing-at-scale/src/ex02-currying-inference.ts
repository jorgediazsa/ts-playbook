/**
 * EXERCISE 2: Currying Inference
 * 
 * Currying allows partial application of functions, but typing an infinitely curried
 * function `(...args) => ...` destroys parameter inference.
 * 
 * GOAL:
 * 1. Implement `curry2` strictly for functions taking exactly 2 arguments.
 * 2. It returns a function that takes the 1st argument, which returns a function 
 *    taking the 2nd argument, yielding the final Return Type.
 * 3. The implementation should perfectly preserve inference down the chain.
 */

// TODO: Implement curry2.
// Make it generic over `A`, `B`, and `R` (return type).
// The input function is `(a: A, b: B) => R`.
// The output is `(a: A) => (b: B) => R`.
export function curry2<A, B, R>(fn: (a: A, b: B) => R) { // FIX ME
    return function (a: any) {
        return function (b: any) {
            return fn(a, b);
        };
    } as any;
}
