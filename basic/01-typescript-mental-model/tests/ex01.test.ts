import { describe, it, expect } from 'vitest';
import { createUserId, createPostId, deleteUser } from '../src/ex01-structural-vs-nominal';

describe('Exercise 01: Structural vs Nominal Typing', () => {
    it('should allow valid UserIds to be passed to deleteUser', () => {
        const validUserId = createUserId('user_123');

        // This should compile and run fine.
        const result = deleteUser(validUserId);
        expect(result.success).toBe(true);
        expect(result.deletedId).toBe('user_123');
    });

    it('should reject raw strings (Compile-time Check)', () => {
        // @ts-expect-error - A raw string should not be assignable to a branded UserId
        deleteUser('user_456');
    });

    it('should reject PostIds being passed as UserIds (Compile-time Check)', () => {
        const postId = createPostId('post_999');

        // @ts-expect-error - A PostId should not be assignable to a UserId
        deleteUser(postId);
    });

    it('should have zero runtime overhead in the constructor', () => {
        const id = 'user_abc';
        const brandedId = createUserId(id);

        // The brand should only exist in the type system, not as a runtime object shape
        expect(typeof brandedId).toBe('string');
        expect(brandedId).toEqual('user_abc');
        expect(Object.keys(brandedId).length).toBe(Object.keys('user_abc').length);
    });
});
