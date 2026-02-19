import { describe, it, expect } from 'vitest';
import { countNodes } from '../src/ex02-recursive-types';

describe('Exercise 02: Recursive Types', () => {

    it('can count deep nodes', () => {
        // We are just verifying the runtime logic works despite type refactors
        const tree: any = {
            id: '1', type: 'box', children: [
                { id: '2', type: 'text' },
                { id: '3', type: 'image' }
            ]
        };
        expect(countNodes(tree)).toBe(3);
    });

});
