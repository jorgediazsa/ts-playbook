import { pluckId } from '../src/ex01-constraints';

const valid = [{ id: '1', rank: 1 }];
pluckId(valid);

// @ts-expect-error - number does not have an ID string
pluckId([1, 2, 3]);

// @ts-expect-error - objects missing ID
pluckId([{ name: 'test' }]);
