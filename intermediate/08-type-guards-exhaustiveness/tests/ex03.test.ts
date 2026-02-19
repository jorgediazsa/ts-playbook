import { describe, it, expect } from 'vitest';
import { getUIState } from '../src/ex03-discriminated-unions';

describe('Exercise 03: Discriminated Unions', () => {

    it('correctly returns UI state for generic states', () => {
        // Underneath, the file should execute smoothly even after the interfaces change.
        expect(getUIState({ state: 'SUCCESS', url: 'http://test.com' })).toBe('Done! See it at http://test.com');
        expect(getUIState({ state: 'UPLOADING', progress: 50 })).toBe('Uploading: 50%');
        expect(getUIState({ state: 'FAILED', errorMessage: 'timeout' })).toBe('Error: timeout');
    });

});
