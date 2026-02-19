import { describe, it, expect } from 'vitest';
import { PromiseFunctor } from '../src/ex06-hkt-simulation';

describe('Exercise 06: HKT Simulation', () => {

    it('correctly maps over promises', async () => {
        if (!PromiseFunctor.map) {
            return; // Skip if user hasn't implemented it
        }

        const promise = Promise.resolve(10);
        const mapped = PromiseFunctor.map(promise, (x: number) => x * 2);

        expect(await mapped).toBe(20);
    });

});
