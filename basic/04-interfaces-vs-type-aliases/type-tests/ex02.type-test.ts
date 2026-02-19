import { TreeNodeType } from '../src/ex02-recursive-types';

// Let's create a deeply nested structure type-checker test.
// If TreeNodeType is an interface, the compiler handles this much better.

const goodTree: TreeNodeType = {
    id: 'root',
    type: 'box',
    children: [
        {
            id: 'child1',
            type: 'box',
            children: [
                {
                    id: 'child2',
                    type: 'text'
                }
            ]
        }
    ]
};

// @ts-expect-error - 'video' is not a valid type
const badTree: TreeNodeType = {
    id: 'root',
    type: 'video',
};
