import { describe, it, expect } from 'vitest';
import { createStore } from '../src/ex03-typed-getters';

describe('Exercise 03: Typed Getters', () => {

    it('gets and sets underlying data', () => {
        const store = createStore({ name: 'Alice', rank: 1 });
        store.set('rank', 2);
        expect(store.get('rank')).toBe(2);
    });

});
