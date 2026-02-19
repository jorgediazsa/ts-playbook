import { PrefixKeys, RenameKeys } from '../src/ex02-key-remapping';
import { Expect, Equal } from '../../../type-utils';

// --- PrefixKeys ---
type P1 = Expect<Equal<
    PrefixKeys<{ id: string; age: number }, 'user_'>,
    { user_id: string; user_age: number }
>>;

// --- RenameKeys ---
type R1 = Expect<Equal<
    RenameKeys<{ id: string; name: string; age: number }, { id: 'userId'; name: 'fullName' }>,
    { userId: string; fullName: string; age: number }
>>;
