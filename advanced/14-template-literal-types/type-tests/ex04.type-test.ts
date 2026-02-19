import { ValidatePermission, checkPermission } from '../src/ex04-route-validation';
import { Expect, Equal } from '../../../type-utils';

// Valid
checkPermission('read:users');
checkPermission('delete:comments');

// Invalid Action
// @ts-expect-error
checkPermission('update:users');

// Invalid Resource
// @ts-expect-error
checkPermission('read:articles');

// Invalid Format
// @ts-expect-error
checkPermission('read-users');

// --- Raw Validation ---
type V1 = Expect<Equal<ValidatePermission<'read:users'>, 'read:users'>>;
type V2 = Expect<Equal<ValidatePermission<'update:users'>, 'Invalid permission format or unknown action/resource'>>;
type V3 = Expect<Equal<ValidatePermission<'read:articles'>, 'Invalid permission format or unknown action/resource'>>;
