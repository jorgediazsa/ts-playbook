import { describe, it, expect } from 'vitest';
import { RawErrorCode, parseError } from '../src/ex03-modern-enum-pattern';

describe('Exercise 03: Modern Enum Pattern', () => {

    it('acts purely as a JS object at runtime', () => {
        // Unlike Enums, standard objects have no backwards mappings or IIFE closures
        const keys = Object.keys(RawErrorCode);

        expect(keys).toEqual(['NOT_FOUND', 'TIMEOUT', 'SERVER_ERROR']);
        expect(keys).toHaveLength(3);

        // Validate the actual literal numbers
        expect(Object.values(RawErrorCode)).toEqual([404, 408, 500]);
    });

    it('works with strictly typed functions', () => {
        expect(parseError(408)).toBe('Please try again.');
        expect(parseError(404)).toBe('Fatal error.');
    });

});
