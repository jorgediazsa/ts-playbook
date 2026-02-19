/**
 * EXERCISE 4: Callback Variance Correctness
 * 
 * TypeScript behaves BIVARIANTLY when it comes to callback parameters in method signatures.
 * This is a deliberate design choice (historically for DOM event compatibility),
 * but it means compiling will succeed even when a user provides a callback 
 * that assumes a NARROWER type than what you actually pass them!
 * 
 * GOAL:
 * 1. Analyze the failing usage of `registerHandler_BAD`.
 * 2. Implement `registerHandler_GOOD` which forces INVARIANCE or strict CONTRAVARIANCE.
 *    (Hint: Using `unknown` as a boundary, or an invariant wrapper pattern).
 */

class Animal { name = 'animal'; }
class Dog extends Animal { bark() { return 'woof'; } }

// --- THE BAD PATTERN ---
// Because of TS Bivariance, it allows passing a `(dog: Dog) => void` 
// even though the runner clearly passes an `Animal`.
export function registerHandler_BAD(cb: (animal: Animal) => void) {
    cb(new Animal()); // DANGER: If they passed a Dog callback, `.bark()` will crash here!
}

// --- EXPLORATION ---
// Does changing `cb: (animal: Animal) => void` to an interface property fix it?
// TS `strictFunctionTypes: true` fixes bivariance for standalone function properties, 
// but method signatures `cb(a: Animal): void` remain bivariant.

export interface HandlerRegistry {
    // Method signature = bivariant! (unsafe)
    handle(animal: Animal): void;

    // Property signature = strictly contravariant! (safe with strictFunctionTypes)
    handleSafe: (animal: Animal) => void;
}

// TODO: Fix this function to prevent the user from passing `(dog: Dog) => void`
// Use the property signature technique.
export function registerHandler_GOOD(opts: HandlerRegistry) {
    // FIX ME: We want the type system to REJECT unsafe handlers.
    opts.handleSafe(new Animal());
}
