import { describe, it, expect } from 'vitest';
import { getConfig } from '../src/ex01-typed-config-loader';

describe('Exercise 01: Typed Config Loader', () => {

    it('retrieves the config', () => {
        // We are testing standard JS behavior here, TS handles the deep checks
        // If getConfig is strongly typed, everything flows nicely.
        expect(getConfig('databaseUrl')).toBe('postgres://localhost');
        expect(getConfig('maxRetries')).toBe(3);
    });

});
