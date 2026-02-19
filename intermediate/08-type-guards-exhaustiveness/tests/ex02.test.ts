import { describe, it, expect } from 'vitest';
import { parseEnvironment, assertIsString } from '../src/ex02-assertion-functions';

describe('Exercise 02: Assertion Functions', () => {

    it('throws on invalid data', () => {
        expect(() => assertIsString(123, 'TEST')).toThrow('Environment variable TEST is missing or not a string');
        expect(() => parseEnvironment({})).toThrow();
    });

    it('passes on valid data and executes the narrowed path', () => {
        // if the function processes properly, toLowerCase should execute
        expect(parseEnvironment({ DATABASE_URL: 'POSTGRES://LOCALHOST' })).toBe('postgres://localhost');
    });

});
