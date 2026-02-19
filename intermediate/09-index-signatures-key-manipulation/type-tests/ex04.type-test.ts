import { FormValues } from '../src/ex04-schema-inference';

// @ts-expect-error - If FormValues is strictly inferred from the schema, this errors:
const invalidType: FormValues = {
    username: { type: 'boolean', required: true },
    age: { type: 'number', required: false }
};

// @ts-expect-error - Should complain about missing 'age' property
const missingAge: FormValues = {
    username: { type: 'string', required: true }
};
