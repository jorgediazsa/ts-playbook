import { describe, it, expect } from 'vitest';
import { buildPatchPayload } from '../src/ex02-exact-optional-properties';

describe('Exercise 02: Exact Optional Properties', () => {

    it('builds a payload with explicit undefineds allowed', () => {
        // We want to make sure the runtime object actually contains the undefined keys,
        // simulating a scenario where explicit undefineds are passed.
        const payload = buildPatchPayload('Alice', undefined, true);

        expect('age' in payload).toBe(true);
        expect(payload.age).toBe(undefined);
        expect(payload.bio).toBe(null);
    });

});
