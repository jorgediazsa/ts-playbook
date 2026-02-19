import { IsStringOrNumber, StrictIsStringOrNumber } from '../src/ex02-preventing-distribution';
import { Expect, Equal } from '../../../type-utils';

// --- The Bug ---
// IsStringOrNumber distributes: (string extends string|number ? true : false) | (boolean extends string|number ? true : false)
// Which becomes: true | false (aka boolean)
type Bug = Expect<Equal<IsStringOrNumber<string | boolean>, boolean>>; // This proves it distributes!

// --- The Fix ---
// The strict version should evaluate the entire union `string | boolean` against `string | number`.
// Since boolean does NOT extend string | number, it should return false.
type Fix1 = Expect<Equal<StrictIsStringOrNumber<string | boolean>, false>>;
type Fix2 = Expect<Equal<StrictIsStringOrNumber<string | number>, true>>;
type Fix3 = Expect<Equal<StrictIsStringOrNumber<string>, true>>;
