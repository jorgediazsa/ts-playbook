import { describe, it, expect } from 'vitest';
import { curry2 } from '../src/ex02-currying-inference';

describe('Exercise 16.02: Currying', () => {
    it('correctly executes at runtime', () => {
        const add = (a: number, b: number) => a + b;
        const curriedAdd = curry2(add);

        // Test fails at compile time until curry2 returns the properly typed execution chain
        expect(curriedAdd(5)(10)).toBe(15);
    });
});
