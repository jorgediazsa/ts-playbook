import { curry2 } from '../src/ex02-currying-inference';
import { Expect, Equal } from '../../type-utils';

const add = (a: number, b: number) => a + b;
const curriedAdd = curry2(add);

// Should infer Return type precisely
type R1 = Expect<Equal<typeof curriedAdd, (a: number) => (b: number) => number>>;

// Parameter mismatch
const concatStr = (a: string, b: string) => a + b;
const curriedConcat = curry2(concatStr);

// @ts-expect-error
curriedConcat(1); // Error: expected string, got number
