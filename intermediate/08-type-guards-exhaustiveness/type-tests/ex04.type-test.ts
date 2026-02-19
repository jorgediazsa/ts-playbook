import { assertNever } from '../src/ex04-exhaustiveness';

// @ts-expect-error - Can't pass a string to a method expecting 'never'
assertNever("leftover value");

// @ts-expect-error - Even undefined is not allowed
assertNever(undefined);
