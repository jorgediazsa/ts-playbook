import { FastExtractRole } from '../src/ex05-performance-blowups';
import { Expect, Equal } from '../../../type-utils';

type T1 = Expect<Equal<FastExtractRole<'admin'>, { role: 'admin'; privileges: string[] }>>;
type T2 = Expect<Equal<FastExtractRole<'user'>, { role: 'user'; profile: string }>>;
type T3 = Expect<Equal<FastExtractRole<'guest'>, { role: 'guest' }>>;
