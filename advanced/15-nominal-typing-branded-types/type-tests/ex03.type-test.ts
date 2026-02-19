// Runtime tests cover Ex03 primarily.
// Type tests: Ensure that AccountId cannot be spoofed.
import { AccountId } from '../src/ex03-escape-hatches';

// @ts-expect-error
const fakeId: AccountId = 'acc_fake';
