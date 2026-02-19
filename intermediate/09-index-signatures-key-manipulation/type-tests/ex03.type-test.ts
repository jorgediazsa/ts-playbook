import { createStore } from '../src/ex03-typed-getters';

const store = createStore({ name: 'Bob', age: 40 });

store.set('name', 'Alice');

// @ts-expect-error - Ensure type validation prevents wrong types from being passed to set
store.set('age', '41');

// @ts-expect-error - Ensure invalid keys are rejected
store.set('unknown', true);
