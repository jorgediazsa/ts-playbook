import { createElement, createNode } from '../src/ex01-overloads-vs-unions';

// BAD ERROR MESSAGE
// Hover over this error:
// @ts-expect-error
createElement('input', { className: 'testing' });
// Notice the error says: "...not assignable to parameter of type '{ type: "text" | "number"; value?: string; }'."
// It gives the error for `<input>`, which happens to be the last overload. 
// What if it was `createElement('div', { typo: true })` ? The error STILL mentions the `<input>` overload!
// @ts-expect-error
createElement('div', { typo: true });

// GOOD ERROR MESSAGE
// Once refactored, the error should correctly flag the exact property mismatch for `<div/>`.
const el = createNode('div', { className: 'test' });

// @ts-expect-error
createNode('div', { typo: true });
// @ts-expect-error
createNode('input', { className: 'test' });
