import {
    User,
    MyExclude,
    MyExtract,
    MyNonNullable,
    MyPick,
    MyOmit
} from '../src/ex02-set-utilities';

// --- MyExclude ---
type ExRes = MyExclude<'A' | 'B' | 'C', 'A'>;
const ex1: ExRes = 'B';
// @ts-expect-error
const ex2: ExRes = 'A';

// --- MyExtract ---
type ExtRes = MyExtract<'A' | 'B' | 'C', 'A' | 'D'>;
const ext1: ExtRes = 'A';
// @ts-expect-error
const ext2: ExtRes = 'B';

// --- MyNonNullable ---
type NNRes = MyNonNullable<string | null | undefined>;
const nn1: NNRes = 'A';
// @ts-expect-error
const nn2: NNRes = null;

// --- MyPick ---
type PickRes = MyPick<User, 'id' | 'name'>;
const pk1: PickRes = { id: '1', name: 'A' };
// @ts-expect-error
const pk2: PickRes = { id: '1', name: 'A', email: 'e' };

// --- MyOmit ---
type OmitRes = MyOmit<User, 'id' | 'name'>;
const om1: OmitRes = { email: null };
// @ts-expect-error
const om2: OmitRes = { email: null, id: '1' };
