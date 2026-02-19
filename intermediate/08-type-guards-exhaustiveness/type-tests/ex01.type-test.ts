import { isUser, User } from '../src/ex01-custom-predicates';

const data: unknown = { id: 'test', email: 'test' };

if (isUser(data)) {
    // TS must naturally narrow data to User
    const _u: User = data;
} else {
    // @ts-expect-error - Outside the block, it should still be unknown
    data.email;
}
