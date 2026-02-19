import { describe, it, expect } from 'vitest';
import { makeMoney, makeUserId, makePostId } from '../src/ex01-branded-types';

describe('Exercise 15.01: Branded Types', () => {
    it('constructs branded types that act indistinguishably from primitives at runtime', () => {
        const id = makeUserId('user_1');
        expect(typeof id).toBe('string');
        expect(id).toBe('user_1');

        const m = makeMoney(100);
        expect(m + 50).toBe(150); // Valid runtime math
    });

    it('validates rules inside the constructor boundary', () => {
        expect(() => makeMoney(-50)).toThrow('Money cannot be negative');
    });
});
