import { describe, it, expect } from 'vitest';
import { pluckId } from '../src/ex01-constraints';

describe('Exercise 01: Constraints', () => {

    it('plucks ids out of objects securely', () => {
        const data = [
            { id: '1', name: 'Alice' },
            { id: '2', name: 'Bob' }
        ];
        expect(pluckId(data)).toEqual(['1', '2']);
    });

});
