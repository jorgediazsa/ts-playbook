import { describe, it, expect, vi } from 'vitest';
import { registerDogHandler, handleAnyAnimal } from '../src/ex03-variance';

describe('Exercise 03: Variance', () => {

    it('safely handles a broader handler for a narrower registry (Contravariance)', () => {
        // If the student correctly leaves the safe assignment:
        expect(() => registerDogHandler(handleAnyAnimal)).not.toThrow();
    });

});
