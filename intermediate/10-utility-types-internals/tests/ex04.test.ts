import { describe, it, expect } from 'vitest';
import { fetchRoute } from '../src/ex04-type-gymnastics';

describe('Exercise 04: Type Gymnastics', () => {

    it('works securely', () => {
        // We expect the student to flatten RouteParams. Behavior should remain the same.
        expect(fetchRoute('/api/users/:id/posts/:postId', { id: '1', postId: '2' })).toBe('/api/users/1/posts/2');
    });

});
