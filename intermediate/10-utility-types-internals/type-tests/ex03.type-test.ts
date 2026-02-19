import { NestedStructure, DeepPartial, DeepReadonly, Mutable } from '../src/ex03-deep-utilities';

// --- DeepPartial ---
const dp1: DeepPartial<NestedStructure> = {
    config: {
        // retries can be missing now!
        // headers can be missing!
    }
};

// @ts-expect-error - Ensure it doesn't allow wrong types entirely
const dp2: DeepPartial<NestedStructure> = { id: 123 };

// --- DeepReadonly ---
const dro: DeepReadonly<NestedStructure> = {
    id: 'a',
    config: { retries: 3, headers: { auth: 'token' } }
};

// @ts-expect-error - Must error on nested mutation
dro.config.retries = 4;

// --- Mutable ---
interface ROUser {
    readonly id: string;
}

const mut: Mutable<ROUser> = { id: 'test' };
mut.id = 'changed'; // Valid because Mutable removes readonly

// @ts-expect-error - Ensure original cannot mutate
const strictMut: ROUser = mut;
strictMut.id = 'changed'; // Should error here!
