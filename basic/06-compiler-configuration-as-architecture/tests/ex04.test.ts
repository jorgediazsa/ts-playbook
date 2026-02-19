import { describe, it, expect } from 'vitest';
import { executeTask } from '../src/ex04-module-resolution';

describe('Exercise 04: moduleResolution', () => {

    it('executes utilizing the public method instead of crashing', () => {
        // We expect the student to change the implementation to use public
        const res = executeTask();

        // NOTE: This test will fail out of the box until the student switches 
        // `doSomethingPrivate` to `doSomethingPublic`.
        expect(res).toBe('public response');
    });

});
