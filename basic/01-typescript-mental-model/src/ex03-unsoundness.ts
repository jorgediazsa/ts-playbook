/**
 * EXERCISE 3: Unsoundness in TypeScript (Array Covariance)
 * 
 * TypeScript allows assigning an Array<Subtype> to an Array<SuperType>.
 * This is technically unsound because arrays are mutable. If you push a 
 * SuperType into the aliased array, you've polluted the original SubType array.
 * 
 * GOAL:
 * 1. Read through the `dangerouslyProcessAnimals` function. It takes `Animal[]`.
 * 2. See how it crashes or pollutes when `Dog[]` is passed in.
 * 3. FIX the types of `dangerouslyProcessAnimals` (or its parameters) so that 
 *    passing a mutable `Dog[]` is a compile-time error, while still allowing
 *    the function to *read* from an array of dogs.
 */

export interface Animal {
    name: string;
}

export interface Dog extends Animal {
    bark(): string;
}

export interface Cat extends Animal {
    meow(): string;
}

// ------------------------------------------------------------------
// The Unsound Array Covariance bug
// ------------------------------------------------------------------

// TODO: Fix the parameter type here so the function cannot mutate callers' arrays.
// Senior rule of thumb: if you don't intend to mutate, accept a readonly view.
// This also avoids the classic "array covariance + mutation" unsoundness trap.
export function safelyProcessAnimals(animals: ReadonlyArray<Animal>) {
    // We only READ the animals.
    animals.forEach(a => console.log(a.name));

    // Intentionally no mutation here.
    // If you try to `push`, the compiler should block it.
}

// ------------------------------------------------------------------
// Safe User Input Indexing (Another Unsoundness edge)
// ------------------------------------------------------------------

/**
 * Similarly, TS is unsound when accessing array elements by index or Map keys.
 * By default, `arr[10]` returns `T`, not `T | undefined`, unless 
 * `--noUncheckedIndexedAccess` is turned on (it is for this project!).
 * 
 * Notice that we enabled it in `tsconfig.json`.
 */
export function getAnimalName(animals: Animal[], index: number): string {
    // TODO: Fix this function. Because of `noUncheckedIndexedAccess`, 
    // `animal` is `Animal | undefined`. You need to handle the undefined case.
    const animal = animals[index];
    return animal?.name ?? 'Unknown Animal';
}
