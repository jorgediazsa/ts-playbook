import { describe, it, expect } from 'vitest';
import { executeLogin, myRoutes } from '../src/ex03-literal-widening-satisfies';

describe('Exercise 03: Literal Widening and Satisfies', () => {

    it('preserves the literal value so it can be passed to strictly typed functions', () => {
        // If the TS types are wrong, this test might still run fine (Type Erasure!)
        // but the compile step would fail.

        // We intentionally grab the literal property from the object
        const result = executeLogin(myRoutes.login.method);
        expect(result).toBe('Executing POST request...');
    });

    it('validates shape matching RouteConfig (Compile-time)', () => {
        // We can't easily write a test that checks if the compiler caught a typo 
        // inside `myRoutes` because compiling the test suite would fail first!
        // But we CAN verify that at runtime, it maintains the correct structure.
        expect(myRoutes.login.method).toBe('POST');
        expect(myRoutes.logout.method).toBe('DELETE');

        // The true test of success is `pnpm typecheck` throwing 0 errors 
        // while the user's IDE correctly infers 'POST' instead of `string`.
    });

});
