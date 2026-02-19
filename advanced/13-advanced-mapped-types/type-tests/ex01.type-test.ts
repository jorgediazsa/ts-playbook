import { Mutable, RequiredKeys, OptionalKeys } from '../src/ex01-modifiers';
import { Expect, Equal } from '../../../type-utils';

interface User {
    readonly id: string;
    name: string;
    age?: number;
    email?: string;
}

// --- Mutable ---
type MutUser = Mutable<User>;
type M1 = Expect<Equal<MutUser, { id: string; name: string; age?: number; email?: string }>>;

// --- RequiredKeys ---
type Req = Expect<Equal<RequiredKeys<User>, 'id' | 'name'>>;

// --- OptionalKeys ---
type Opt = Expect<Equal<OptionalKeys<User>, 'age' | 'email'>>;
