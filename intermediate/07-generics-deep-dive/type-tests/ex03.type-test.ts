import { registerDogHandler, registerAnimalHandler, handleAnyAnimal, handleOnlyDogs } from '../src/ex03-variance';

// Safe: Contravariant parameter allows a broader function to handle a narrower input
registerDogHandler(handleAnyAnimal);

// @ts-expect-error - Unsafe: The registry will pass an Animal (missing 'breed') to a handler expecting a Dog!
registerAnimalHandler(handleOnlyDogs);
