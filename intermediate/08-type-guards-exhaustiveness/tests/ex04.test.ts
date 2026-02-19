import { describe, it, expect } from 'vitest';
import { getProcessingFee, assertNever } from '../src/ex04-exhaustiveness';

describe('Exercise 04: Exhaustiveness Checking', () => {

    it('calculates the correct fees for handled types', () => {
        expect(getProcessingFee({ type: 'CREDIT_CARD', number: '123' })).toBe(0.03);
        // Once fixed, crypto should return 0.01
        expect(getProcessingFee({ type: 'CRYPTO', wallet: '0x123' })).toBe(0.01);
    });

    it('assertNever throws violently at runtime', () => {
        // Test the runtime throw using a forceful cast to bypass compile checks
        expect(() => assertNever({ type: 'UKNOWN' } as never)).toThrow();
    });

});
