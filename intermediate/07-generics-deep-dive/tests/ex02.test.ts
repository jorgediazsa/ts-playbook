import { describe, it, expect } from 'vitest';
import { fetchUser } from '../src/ex02-default-generics';

describe('Exercise 02: Default Generics', () => {

    it('compiles and returns the expected result struct', () => {
        const res = fetchUser();
        expect(res.success).toBe(false);
        if (!res.success) {
            expect(res.error).toBeInstanceOf(Error);
        }
    });

});
