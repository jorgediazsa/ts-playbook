/**
 * EXERCISE 4: Schema -> Inferred Types (`typeof` & `as const`)
 * 
 * Instead of writing a TypeScript interface and then maintaining a
 * synchronized JavaScript schema (for runtime validation or UI generation),
 * Senior Engineers often write the JS Schema as the SSOT (Single Source of Truth)
 * and derive the Typescript interface.
 * 
 * GOAL:
 * 1. Read `formSchema`. Notice it uses `as const` to freeze its shape.
 * 2. Look at the `FormValues` type. It is currently `Record<string, string>`.
 * 3. Rewrite `FormValues` so that it uses `typeof formSchema` and maps over 
 *    the keys to create a strict interface.
 *    (Hint: Since the schema values hold strings like 'string' or 'number', 
 *     you could use a conditional type to translate those runtime strings into TS types if you want to be fancy, 
 *     but for this exercise, just infer the literal string types `'string' | 'number'`).
 */

export const formSchema = {
    username: { type: 'string', required: true },
    age: { type: 'number', required: false }
} as const;

// TODO: Infer this directly from `typeof formSchema`
// Expected exact structure:
// {
//   username: { readonly type: "string"; readonly required: true };
//   age:      { readonly type: "number"; readonly required: false };
// }
export type FormValues = Record<string, any>; // FIX ME

// ------------------------------------------------------------------

// Once FormValues is fixed, TS will catch the errors below!
export const validFormMap: FormValues = {
    username: { type: 'string', required: true },
    age: { type: 'number', required: false }
};

// FIX ME: This should be flagged by TS because "boolean" is not allowed.
export const invalidFormMap: FormValues = {
    username: { type: 'boolean', required: true }
};
