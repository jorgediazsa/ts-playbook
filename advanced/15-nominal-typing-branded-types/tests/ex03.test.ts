import { describe, it, expect } from 'vitest';
import { processRawData_GOOD } from '../src/ex03-escape-hatches';

describe('Exercise 15.03: Escape Hatches', () => {
    it('throws on invalid raw data due to boundary function', () => {
        // Once fixed, processRawData_GOOD should use the constructor which throws on bad inputs
        // The test currently fails because BAD code bypasses it!
        expect(() => processRawData_GOOD('123')).toThrow('Invalid Account ID');
    });

    it('succeeds on valid data', () => {
        expect(() => processRawData_GOOD('acc_123')).not.toThrow();
    });
});
