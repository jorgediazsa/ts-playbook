import { describe, it, expect } from 'vitest';
import { safelyProcessAnimals, getAnimalName, Dog } from '../src/ex03-unsoundness';

describe('Exercise 03: Unsoundness', () => {

    describe('safelyProcessAnimals (Array Covariance fix)', () => {
        it('should accept Dog[] safely without polluting it (no mutation)', () => {
            const myDogs: Dog[] = [
                { name: 'Rex', bark: () => 'Woof!' }
            ];

            safelyProcessAnimals(myDogs);

            // The critical property: the function must not mutate/pollute caller-owned arrays.
            expect(myDogs.length).toBe(1);
            expect(myDogs[0].bark()).toBe('Woof!');
        });
    });

    describe('getAnimalName (Indexed Access fix)', () => {
        it('returns a fallback string instead of crashing when index is out of bounds', () => {
            const animals = [{ name: 'Lion' }];

            const inBounds = getAnimalName(animals, 0);
            expect(inBounds).toBe('Lion');

            const outOfBounds = getAnimalName(animals, 99);
            expect(outOfBounds).toBe('Unknown Animal');
        });
    });

});
