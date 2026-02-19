import { describe, it, expect } from 'vitest';
import { isPremium, assertHasEmail, processUser, BasicUser } from '../src/ex02-type-guards';

describe('Exercise 02: Type Guards & Asserts', () => {

    describe('isPremium', () => {
        it('returns true for premium users', () => {
            const u = { id: '1', plan: 'premium', perks: ['a'] } as BasicUser;
            expect(isPremium(u)).toBe(true);
        });

        it('returns false for free users', () => {
            const u = { id: '1', plan: 'free' } as BasicUser;
            expect(isPremium(u)).toBe(false);
        });
    });

    describe('assertHasEmail', () => {
        it('throws if email is missing', () => {
            const u: BasicUser = { id: '1', plan: 'free' };
            expect(() => assertHasEmail(u)).toThrow('missing an email');
        });

        it('does nothing if email is present', () => {
            const u: BasicUser = { id: '1', email: 'test@test.com', plan: 'free' };
            expect(() => assertHasEmail(u)).not.toThrow();
        });
    });

    describe('processUser', () => {
        it('processes premium users', () => {
            const u: BasicUser = { id: '1', plan: 'premium', perks: ['Priority Support'] } as any;
            expect(processUser(u)).toBe('Premium user has 1 perks!');
        });

        it('processes basic users with email', () => {
            const u: BasicUser = { id: '1', email: 'HELLO@World.com', plan: 'free' };
            expect(processUser(u)).toBe('Sending email to hello@world.com');
        });

        it('crashes properly for basic users missing email (runtime behavior proved by type asserting)', () => {
            const badU: BasicUser = { id: '1', plan: 'free' };
            expect(() => processUser(badU)).toThrow();
        });
    });

});
