import { Todo, MyPartial, MyRequired, MyReadonly, MyRecord } from '../src/ex01-standard-utilities';

// --- MyPartial ---
const partial: MyPartial<Todo> = {}; // Should allow empty object
// @ts-expect-error - Ensure it doesn't allow random properties
partial.random = 1;

// --- MyRequired ---
// @ts-expect-error - 'description' is required now!
const req: MyRequired<Todo> = { title: 'A', completed: true };

// --- MyReadonly ---
const ro: MyReadonly<Todo> = { title: 'A', completed: false };
// @ts-expect-error - Cannot reassign
ro.title = 'B';

// --- MyRecord ---
const rec: MyRecord<'A' | 'B', number> = { A: 1, B: 2 };
// @ts-expect-error
rec.A = 'string';
