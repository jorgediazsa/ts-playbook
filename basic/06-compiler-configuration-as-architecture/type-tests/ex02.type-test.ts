import { UpdateUserPayload } from '../src/ex02-exact-optional-properties';

// If exactOptionalPropertyTypes is enabled and the interface is fixed properly,
// these should be perfectly valid:
const valid1: UpdateUserPayload = {};
const valid2: UpdateUserPayload = { name: 'Bob' };
const valid3: UpdateUserPayload = { name: undefined, age: undefined }; // Explicit undefined
const valid4: UpdateUserPayload = { bio: null };

// @ts-expect-error - bio doesn't accept numbers
const invalid1: UpdateUserPayload = { bio: 123 };
