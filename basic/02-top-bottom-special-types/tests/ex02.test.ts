import { describe, it, expect } from 'vitest';
import { reduceUserScore, UserAction } from '../src/ex02-exhaustive-never';

describe('Exercise 02: Exhaustive Matching with never', () => {

    it('correctly adds bonus on LOGIN', () => {
        const action: UserAction = { type: 'LOGIN', bonus: 50 };
        expect(reduceUserScore(100, action)).toBe(150);
    });

    it('keeps score unchanged on LOGOUT', () => {
        const action: UserAction = { type: 'LOGOUT' };
        expect(reduceUserScore(100, action)).toBe(100);
    });

    it('adds 5 points on TWEET', () => {
        const action: UserAction = { type: 'TWEET', text: 'Hello!' };
        expect(reduceUserScore(100, action)).toBe(105);
    });

    // NOTE: This test will fail at runtime until the interface is updated in Step 4.
    // The goal is for the user to uncomment BAN_USER, see the TS error, fix it, 
    // and then this test passes.
    it('resets score to 0 on BAN_USER', () => {
        // We cast to UserAction here just in case the user hasn't uncommented 
        // the BAN_USER union type yet.
        const action = { type: 'BAN_USER', reason: 'spam' } as unknown as UserAction;

        expect(reduceUserScore(100, action)).toBe(0);
    });

});
