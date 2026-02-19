import { describe, it, expect } from 'vitest';
import { validateUserPayload } from '../src/ex02-domain-validation';

describe('Exercise 15.02: Domain Validation Boundaries', () => {
    it('parses valid payloads into branded domain models', () => {
        const raw = { id: 'usr_1', contactEmail: 'test@test.com' };
        const user = validateUserPayload(raw);
        expect(user.id).toBe('usr_1');
        expect(user.contactEmail).toBe('test@test.com');
    });

    it('throws on invalid emails', () => {
        expect(() => validateUserPayload({ id: '1', contactEmail: 'bad' })).toThrow('Invalid email');
    });

    it('throws on null or primitive payloads', () => {
        expect(() => validateUserPayload(null)).toThrow();
        expect(() => validateUserPayload('string')).toThrow();
    });
});
