/**
 * EXERCISE 6: HKT Simulation (Higher-Kinded Types)
 * 
 * TS doesn't have true HKTs like Haskell or Scala (e.g. `F<T>`).
 * We simulate them using "Defunctionalization" by mapping string identifiers
 * to concrete type implementations via an interface.
 * 
 * GOAL:
 * 1. Read `HKT` and `HKTMap`. This is the dictionary that holds our simulated types.
 * 2. Look at the `Box` implementation.
 * 3. Create a new `Promise` implementation of the HKT pattern.
 *    - Add `'Promise'` to `HKTMap`.
 *    - Implement a `map` function that takes a `Promise<T>` and a `(val: T) => U` 
 *      and returns a `Promise<U>`.
 */

export interface HKTMap<T> {
    // Mapping of unique string IDs to their actual types wrapping T
    'Box': Box<T>;
    // TODO: Add 'Promise': Promise<T>
}

// The generic extractor type
export type HKT<URI extends keyof HKTMap<any>, T> = HKTMap<T>[URI];

export interface Functor<URI extends keyof HKTMap<any>> {
    map: <T, U>(val: HKT<URI, T>, fn: (a: T) => U) => HKT<URI, U>;
}

// ------------------------------------------------------------------
// Box Implementation
// ------------------------------------------------------------------

export interface Box<T> { value: T; }

export const BoxFunctor: Functor<'Box'> = {
    map: (box, fn) => ({ value: fn(box.value) })
};

// ------------------------------------------------------------------
// Promise Implementation (Your Task)
// ------------------------------------------------------------------

// TODO: Create `PromiseFunctor` that implements `Functor<'Promise'>`.
// It should map over the resolved value of a Promise.
export const PromiseFunctor: any = {}; // FIX ME
