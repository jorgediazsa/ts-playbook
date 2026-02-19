/**
 * EXERCISE 3: Typed Getters/Setters
 * 
 * Building on `keyof` and `T[K]`, we often construct objects that wrap data
 * but expose safe `get` and `set` methods.
 * 
 * GOAL:
 * 1. Read the `Store<T>` interface.
 * 2. Look at the `createStore` function and its generic signature.
 * 3. Update the `set` method inside `Store<T>` so it strictly enforces
 *    that the `value` provided EXACTLY matches the type of `T[key]`.
 * 4. Verify that `store.set` catches wrong types below.
 */

export interface Store<T> {
    get: <K extends keyof T>(key: K) => T[K];
    // TODO: Fix the signature of `set`
    // It should take `key: K` and `value: T[K]`
    set: (key: string, value: any) => void; // FIX ME
}

export function createStore<T>(initial: T): Store<T> {
    const data = { ...initial };
    return {
        get: (key: any) => data[key],
        set: (key: any, value: any) => {
            data[key] = value;
        }
    };
}

// ------------------------------------------------------------------

const userStore = createStore({ id: '123', age: 30 });

// Ensure these types correctly compile or fail
userStore.set('id', '456');

// FIX ME: This should be a TS error once `set` is fixed! Age must be a number.
userStore.set('age', '31');
