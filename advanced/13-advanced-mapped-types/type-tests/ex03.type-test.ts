import { DeepReadonly, DeepPartial } from '../src/ex03-recursive-mapped-types';
import { Expect, Equal } from '../../../type-utils';

interface Config {
    env: string;
    db: {
        host: string;
        port: number;
        ssl: {
            required: boolean;
        };
    };
}

// --- DeepReadonly ---
type ROConfig = DeepReadonly<Config>;
const ro: ROConfig = { env: 'dev', db: { host: 'a', port: 1, ssl: { required: true } } };
// @ts-expect-error
ro.db.host = 'b';
// @ts-expect-error
ro.db.ssl.required = false;

// --- DeepPartial ---
type DPConfig = DeepPartial<Config>;
const dp: DPConfig = { db: { ssl: {} } }; // Deep properties are optional
const dp2: DPConfig = {}; // Everything is optional
