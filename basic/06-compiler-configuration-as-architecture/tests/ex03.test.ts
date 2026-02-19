import { describe, it, expect } from 'vitest';
import { DB_VERSION } from '../src/ex03-isolated-modules';

describe('Exercise 03: Isolated Modules', () => {

    it('compiles correctly and exports the value', () => {
        // This test simply verifies the file can be compiled and executed.
        expect(DB_VERSION).toBe(1.0);
    });

});
