import { describe, it, expect } from 'vitest';
import { safeCapture } from '../src/ex02-unsafe-vendor';

describe('Exercise 18.02: Unsafe Vendor Boundaries', () => {
    it('correctly handles the asynchronous truth of the vendor library', async () => {
        // If safeCapture isn't built correctly, it might try to treat a Promise like a boolean
        // leading to runtime truthiness bugs.
        const result = await safeCapture('test_event');
        expect(result).toBe(true);
    });
});
