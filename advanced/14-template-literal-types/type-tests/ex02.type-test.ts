import { RouteParams } from '../src/ex02-route-params';
import { Expect, Equal } from '../../../type-utils';

type R1 = Expect<Equal<RouteParams<'/users/:id'>, { id: string }>>;
type R2 = Expect<Equal<RouteParams<'/users/:userId/posts/:postId/edit'>, { userId: string; postId: string }>>;
type R3 = Expect<Equal<RouteParams<'/about'>, {}>>; // No params
type R4 = Expect<Equal<RouteParams<'/'>, {}>>;
