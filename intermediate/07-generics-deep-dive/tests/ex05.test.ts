import { describe, it, expect } from 'vitest';
import { zip } from '../src/ex05-inference-traps';

describe('Exercise 05: Inference Traps', () => {

    it('zips arrays correctly at runtime', () => {
        expect(zip(['a', 'b'], [1, 2])).toEqual([
            ['a', 1],
            ['b', 2]
        ]);
    });

});
