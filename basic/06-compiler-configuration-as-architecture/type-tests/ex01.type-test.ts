import { getTopPerformerName } from '../src/ex01-unchecked-indexed-access';

// @ts-expect-error - Expected an array, not a number
getTopPerformerName(123);
