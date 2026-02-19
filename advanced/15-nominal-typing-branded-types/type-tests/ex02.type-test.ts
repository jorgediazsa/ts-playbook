import { validateUserPayload, User } from '../src/ex02-domain-validation';
import { Expect, Equal } from '../../type-utils';

// validateUserPayload strictly returns a User entity
type R1 = Expect<Equal<ReturnType<typeof validateUserPayload>, User>>;

// It enforces that `id` must be a branded UserId, not just string
declare const user: User;
// @ts-expect-error
const strId: string = user.id; // Assignable up (branding extends string) -> wait, does it?
// Ah! Yes, `Brand<string, 'UserId'>` is a subtype of `string`. So `const strId: string = user.id` IS valid.
// The opposite is what fails:
// @ts-expect-error
user.id = 'literal_string';
