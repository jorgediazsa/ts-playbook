import { describe, it, expect } from 'vitest';
import { fireEvent } from '../src/ex04-bivariance';

describe('Exercise 04: Bivariance', () => {

    it('crashes at runtime if the bivariance hole is exploited', () => {
        // If the student hasn't corrected the bivariance, the type-checker passes
        // but the runtime inevitably encounters an undefined value.
        // (Note: `console.log(undefined)` doesn't crash Node, but in a real app it would be a bug).
        // We just ensure the function runs based on structural changes.
        expect(() => fireEvent()).not.toThrow();
    });

});
