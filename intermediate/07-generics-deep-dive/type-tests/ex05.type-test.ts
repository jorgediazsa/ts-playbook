import { zip } from '../src/ex05-inference-traps';

const res = zip(['A'], [1]);

// It should be exactly a tuple.
// @ts-expect-error - If the inference is `Array<string | number>`, it lacks strict tuples.
const firstItem: [string, number] = res[0]; 
