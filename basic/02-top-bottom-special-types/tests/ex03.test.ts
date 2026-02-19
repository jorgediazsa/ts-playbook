import { describe, it, expect } from 'vitest';
import { executeCallback, runAndReturnUndefined } from '../src/ex03-void-vs-undefined';

describe('Exercise 03: void vs undefined', () => {

    describe('executeCallback', () => {
        it('accepts a function that returns nothing (implicitly undefined)', () => {
            let run = false;
            // This should compile once `executeCallback` is fixed to accept `void` returns
            executeCallback(() => {
                run = true;
            });
            expect(run).toBe(true);
        });

        it('accepts a function that returns a value (like number)', () => {
            // This is a TYPE-LEVEL requirement.
            // Runtime tests intentionally avoid depending on the exercise solution compiling.
            // See `type-tests/ex03-void-vs-undefined.type-test.ts`.
            expect(true).toBe(true);
        });
    });

    describe('runAndReturnUndefined', () => {
        it('forces returning undefined strictly', () => {
            // This is perfectly valid
            const result = runAndReturnUndefined(() => {
                return undefined;
            });
            expect(result).toBeUndefined();

            // At runtime, the implementation should also defend the boundary.
            expect(() => runAndReturnUndefined(() => "hello" as unknown as undefined)).toThrow();
        });
    });

});
