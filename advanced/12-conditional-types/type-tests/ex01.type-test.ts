import { IsNever, IsAny, IsUnknown } from '../src/ex01-special-types';
import { Expect, Equal } from '../../../type-utils';

// --- IsNever ---
type N1 = Expect<Equal<IsNever<never>, true>>;
type N2 = Expect<Equal<IsNever<any>, false>>;
type N3 = Expect<Equal<IsNever<unknown>, false>>;
type N4 = Expect<Equal<IsNever<string>, false>>;

// --- IsAny ---
type A1 = Expect<Equal<IsAny<any>, true>>;
type A2 = Expect<Equal<IsAny<never>, false>>;
type A3 = Expect<Equal<IsAny<unknown>, false>>;
type A4 = Expect<Equal<IsAny<string>, false>>;

// --- IsUnknown ---
type U1 = Expect<Equal<IsUnknown<unknown>, true>>;
type U2 = Expect<Equal<IsUnknown<any>, false>>;
type U3 = Expect<Equal<IsUnknown<never>, false>>;
type U4 = Expect<Equal<IsUnknown<string>, false>>;
