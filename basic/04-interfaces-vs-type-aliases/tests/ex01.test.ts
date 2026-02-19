import { describe, it, expect } from 'vitest';
import { createLogger, addPlugin } from '../src/ex01-declaration-merging';

describe('Exercise 01: Declaration Merging', () => {

    it('allows the plugin method to be attached and executed at runtime', () => {
        const core = createLogger();
        const augmented = addPlugin(core);

        // At runtime, the method should exist.
        // At compile-time, `timer` will error until the user completes the declaration merging.
        expect(typeof augmented.timer).toBe('function');

        // We can't spy easily on the console without vitest mocks, but we can verify it doesn't throw
        expect(() => augmented.timer('test')).not.toThrow();
    });

});
