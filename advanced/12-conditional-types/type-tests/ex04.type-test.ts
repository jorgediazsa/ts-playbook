import { MyReturnType, MyParameters, MyAwaited } from '../src/ex04-rebuilding-core-utilities';
import { Expect, Equal } from '../../../type-utils';

// --- MyReturnType ---
const fn1 = () => 'test';
const fn2 = (a: number) => ({ id: a });
type R1 = Expect<Equal<MyReturnType<typeof fn1>, string>>;
type R2 = Expect<Equal<MyReturnType<typeof fn2>, { id: number }>>;

// --- MyParameters ---
type P1 = Expect<Equal<MyParameters<typeof fn2>, [a: number]>>;
type P2 = Expect<Equal<MyParameters<(name: string, age: number) => void>, [name: string, age: number]>>;

// --- MyAwaited ---
type A1 = Expect<Equal<MyAwaited<Promise<string>>, string>>;
type A2 = Expect<Equal<MyAwaited<Promise<Promise<number>>>, number>>; // Must handle deep
type A3 = Expect<Equal<MyAwaited<boolean>, boolean>>; // Non-promise falls through natively
