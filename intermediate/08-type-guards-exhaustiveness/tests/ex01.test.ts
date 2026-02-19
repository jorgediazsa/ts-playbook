import { describe, it, expect } from 'vitest';
import { isUser, processData } from '../src/ex01-custom-predicates';

describe('Exercise 01: Custom Predicates', () => {

    it('correctly validates a valid user at runtime', () => {
        // Tests the runtime JavaScript implementation of your guard
        expect(isUser({ id: '123', email: 'test@test.com' })).toBe(true);
    });

    it('rejects invalid structures', () => {
        expect(isUser(null)).toBe(false);
        expect(isUser("string")).toBe(false);
        expect(isUser({ id: '123' })).toBe(false); // missing email
        expect(isUser({ id: 123, email: 'test' })).toBe(false); // wrong type
    });

    it('processes data securely', () => {
        expect(processData({ id: '1', email: 'BOB@Test.com' })).toBe('bob@test.com');
        expect(processData({ invalid: true })).toBe('Invalid User');
    });

});
