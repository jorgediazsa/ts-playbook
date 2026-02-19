import { Trim, Split, Replace } from '../src/ex01-string-utilities';
import { Expect, Equal } from '../../../type-utils';

// --- Trim ---
type T1 = Expect<Equal<Trim<'  hello  '>, 'hello'>>;
type T2 = Expect<Equal<Trim<'\n\thello \n'>, 'hello'>>;
type T3 = Expect<Equal<Trim<'hello'>, 'hello'>>;

// --- Split ---
type S1 = Expect<Equal<Split<'a,b,c', ','>, ['a', 'b', 'c']>>;
type S2 = Expect<Equal<Split<'hello', ''>, ['h', 'e', 'l', 'l', 'o']>>;
type S3 = Expect<Equal<Split<'single', ','>, ['single']>>;

// --- Replace ---
type R1 = Expect<Equal<Replace<'foo-bar-baz', 'bar', 'test'>, 'foo-test-baz'>>;
type R2 = Expect<Equal<Replace<'hello world', 'xyz', 'test'>, 'hello world'>>;
