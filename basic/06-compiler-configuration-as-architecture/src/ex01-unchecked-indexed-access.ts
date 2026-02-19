/**
 * EXERCISE 1: `noUncheckedIndexedAccess`
 * 
 * When `noUncheckedIndexedAccess` is ON, TypeScript stops assuming that 
 * accessing an index `arr[3]` or `dict['dynamicKey']` is safe.
 * 
 * GOAL:
 * 1. Look at `getTopPerformerName`. It assumes the array always has at least one element.
 * 2. It currently has a type error because `students[0]` is `Student | undefined`.
 * 3. Look at `getEnvironmentVariable`. It assumes the key exists.
 * 4. Fix both functions to handle the `undefined` cases correctly without using `any` or `as Student`.
 */

export interface Student {
    name: string;
    gpa: number;
}

// ------------------------------------------------------------------
// Array Indexing
// ------------------------------------------------------------------

export function getTopPerformerName(students: Student[]): string {
    // TODO: Fix this to safely handle the possibility of an empty array.
    // Return 'No students' if the array is empty.
    const topStudent = students[0];
    return topStudent.name; // FIX ME
}

// ------------------------------------------------------------------
// Dictionary Indexing
// ------------------------------------------------------------------

export type EnvVars = Record<string, string>;

export function getEnvironmentVariable(env: EnvVars, key: string): string {
    // TODO: Fix this to safely handle missing keys.
    // If the key is missing, throw a descriptive error: `Missing env var: ${key}`
    const value = env[key];
    return value.toUpperCase(); // FIX ME
}
