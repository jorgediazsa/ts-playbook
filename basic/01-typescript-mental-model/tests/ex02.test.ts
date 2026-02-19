import { describe, it, expect } from 'vitest';
import { unsafeFetchConfig, safeFetchConfig } from '../src/ex02-type-erasure';

describe('Exercise 02: Type Erasure', () => {
    const validJson = `{"retries": 3, "timeoutMs": 5000, "featureFlags": {"newUi": true}}`;
    const invalidJson = `{"retries": "three", "timeoutMs": 5000}`; // Missing featureFlags, wrong retries type

    describe('unsafeFetchConfig (The problem)', () => {
        it('returns an object that violates the interface without TS complaining', () => {
            // TS thinks `badConfig.retries` is a number because of the `as SystemConfig`
            const badConfig = unsafeFetchConfig(invalidJson);

            // At runtime, it's a string, leading to subtle NaN bugs!
            // This assertion passes because type erasure allows the lie.
            expect(typeof badConfig.retries).toBe('string');
            expect(badConfig.featureFlags).toBeUndefined();
        });
    });

    describe('safeFetchConfig (The solution)', () => {
        it('returns the parsed object when data is valid', () => {
            const config = safeFetchConfig(validJson);
            expect(config.retries).toBe(3);
            expect(config.featureFlags.newUi).toBe(true);
        });

        it('throws an error at runtime when data is structurally invalid', () => {
            expect(() => {
                safeFetchConfig(invalidJson);
            }).toThrow('Invalid config format');
        });

        it('throws an error for non-JSON strings', () => {
            expect(() => {
                safeFetchConfig('not json');
            }).toThrow(); // Fails at JSON.parse or validation depending on implementation
        });
    });
});
