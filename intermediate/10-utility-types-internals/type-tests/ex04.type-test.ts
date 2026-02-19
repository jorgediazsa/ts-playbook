import { RouteParams } from '../src/ex04-type-gymnastics';

// This file simply ensures that RouteParams still evaluates exactly to:
// { id: string; postId: string }

const params: RouteParams = {
    id: '123',
    postId: '456'
};

// @ts-expect-error - Must reject missing props
const missing: RouteParams = { id: '123' };

// @ts-expect-error - Must reject wrong types
const wrongType: RouteParams = { id: 123, postId: '456' };
