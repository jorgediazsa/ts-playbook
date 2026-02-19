import { describe, it, expect } from 'vitest';
import { printAllLevels } from '../src/ex01-runtime-footprints';

describe('Exercise 01: Reverse Mappings', () => {

    it('Object.values() on the enum should only return the actual values, no reverse numbers', () => {
        const values = printAllLevels();

        // If it's still a numeric enum, this test fails because `values` will have length 6
        expect(values).toEqual(['DEBUG', 'INFO', 'ERROR']);
        expect(values).toHaveLength(3);
    });

});
