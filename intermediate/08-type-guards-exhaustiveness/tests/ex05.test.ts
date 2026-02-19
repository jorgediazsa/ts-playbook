import { describe, it, expect, vi } from 'vitest';
import { processForm } from '../src/ex05-pattern-matching-limitations';

describe('Exercise 05: Pattern Matching Limitations', () => {

    it('correctly passes the username to the callback', async () => {
        vi.useFakeTimers();

        const mock = vi.fn();
        processForm({ type: 'LOGIN', username: 'alice' }, mock);

        vi.runAllTimers();
        expect(mock).toHaveBeenCalledWith('alice');

        vi.useRealTimers();
    });

});
