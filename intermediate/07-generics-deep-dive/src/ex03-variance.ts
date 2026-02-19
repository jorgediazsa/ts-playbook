/**
 * EXERCISE 3: Variance (Covariance vs Contravariance)
 * 
 * TypeScript arrays and objects are Covariant. If `Dog extends Animal`, 
 * then `Array<Dog> extends Array<Animal>`.
 * 
 * However, what happens when we use functions/callbacks?
 * 
 * GOAL:
 * 1. Read the `Animal` and `Dog` interfaces.
 * 2. Look at `processAnimal` and `processDog` handlers.
 * 3. Look at `EventHandler<T>` - it's a type alias for a callback.
 * 4. Notice that trying to assign a `processAnimal` handler to an `EventHandler<Dog>` is perfectly safe, but the reverse is dangerous.
 * 5. Your task: Fix the type errors by correctly leveraging Covariance and Contravariance principles. 
 *    (Hint: You don't need to change the function signatures, use the correct assignment!).
 */

export interface Animal { name: string; }
export interface Dog extends Animal { breed: string; }

export type EventHandler<T> = (event: T) => void;

// Handlers
export const handleAnyAnimal: EventHandler<Animal> = (animal) => {
    console.log(`Animal: ${animal.name}`);
};

export const handleOnlyDogs: EventHandler<Dog> = (dog) => {
    console.log(`Dog: ${dog.name}, Breed: ${dog.breed}`);
};

// ------------------------------------------------------------------
// The Registry (Contravariant assignment)
// ------------------------------------------------------------------

export function registerDogHandler(handler: EventHandler<Dog>) {
    // Simulating internal registry
    handler({ name: 'Rex', breed: 'German Shepherd' });
}

export function registerAnimalHandler(handler: EventHandler<Animal>) {
    // Simulating internal registry
    handler({ name: 'Generic Animal' });
}

// TODO: Fix the two assignments below.
// One of them is fundamentally unsafe (Contravariance violation).
// Comment out the unsafe one with a brief explanation, and leave the safe one.

// FIX ME: Evaluate which is safe.
registerDogHandler(handleAnyAnimal);

// FIX ME: Evaluate which is safe.
registerAnimalHandler(handleOnlyDogs); 
