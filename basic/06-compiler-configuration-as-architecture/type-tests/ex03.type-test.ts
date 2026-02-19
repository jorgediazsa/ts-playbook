import { DatabaseSchema, DB_VERSION } from '../src/ex03-isolated-modules';
// TODO: When user fixes ex03 export type, they should ideally also 
// fix imports using `import type { DatabaseSchema } ...` if their linter forces it.
// The primary error is caught during `tsc` compilation.

const myVersion: number = DB_VERSION;

// @ts-expect-error
const badSchema: DatabaseSchema = {
    users: [{ badProperty: true }]
};
