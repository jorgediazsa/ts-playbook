/**
 * EXERCISE 5: Inference Traps (Tuple Widening)
 * 
 * TypeScript tries to be helpful by inferring `[1, 2]` as `number[]` instead 
 * of `[number, number]`. This is often a huge trap when passing tuple-like 
 * arguments to generic functions.
 * 
 * GOAL:
 * 1. Read `zip`. It takes two arrays of equal length and merges them into an array of tuples.
 * 2. Look at the `zipped` variable. Notice TS infers it as `Array<string | number>`.
 * 3. We want `zipped` to be strictly inferred as `Array<[string, number]>`.
 * 4. Fix the `zip` function signature so that the returned array is 
 *    strictly zipped as `Array<[T, U]>`.
 */

// TODO: Fix the return type of `zip`.
export function zip<T, U>(list1: T[], list2: U[]) { // FIX ME (Add return type annotation)
    const result = [];
    const len = Math.min(list1.length, list2.length);
    for (let i = 0; i < len; i++) {
        result.push([list1[i], list2[i]]);
    }
    return result; // Currently returns `any[]` or `(T | U)[][]` depending on TS strictness
}

const names = ['Alice', 'Bob'];
const ages = [30, 40];

// Expected: Array<[string, number]>
// Actual: Array<string | number> (before the fix)
export const zipped = zip(names, ages); 
