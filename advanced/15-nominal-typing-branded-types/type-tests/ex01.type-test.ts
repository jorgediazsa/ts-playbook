import { UserId, PostId, makeUserId, makePostId, makeMoney } from '../src/ex01-branded-types';

const uId = makeUserId('123');
const pId = makePostId('456');

// Prevent primitive assignment
// @ts-expect-error
const uIdRaw: UserId = '123';

// Prevent cross-assignment
function deleteUser(id: UserId) { }
// @ts-expect-error
deleteUser(pId);
deleteUser(uId);

// Raw primitives can't satisfy brands
function transfer(amount: import('../src/ex01-branded-types').Money) { }
// @ts-expect-error
transfer(100);
transfer(makeMoney(100)); // Works
