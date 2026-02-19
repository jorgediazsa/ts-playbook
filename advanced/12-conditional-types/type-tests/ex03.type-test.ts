import { Flatten, UnwrapPromise } from '../src/ex03-infer-pattern-matching';
import { Expect, Equal } from '../../../type-utils';

// --- Flatten ---
type F1 = Expect<Equal<Flatten<string[]>, string>>;
type F2 = Expect<Equal<Flatten<number>, number>>; // Non-arrays remain untouched
type F3 = Expect<Equal<Flatten<(string | number)[]>, string | number>>;

// --- UnwrapPromise ---
type P1 = Expect<Equal<UnwrapPromise<Promise<string>>, string>>;
type P2 = Expect<Equal<UnwrapPromise<number>, number>>; // Non-promises untouched
type P3 = Expect<Equal<UnwrapPromise<Promise<Promise<boolean>>>, boolean>>; // Deep unwrapping
