# Topic 9: Index Signatures & Key Manipulation

Handling dictionaries, maps, and dynamic objects in TypeScript requires mastering key manipulation. When we move away from static, explicitly named properties (`{ a: 1, b: 2 }`) to dynamic ones, type safety often degrades unless handled carefully.

## 1. Index Signatures vs Mapped Types (`Record`)

- **Index Signatures** (`{ [key: string]: string }`): This tells TypeScript "This object can hold *any* string key, and its value will be a string". It completely erases the specific keys the object might have.
- **Mapped Types / Records** (`Record<'A' | 'B', string>`): This tells TypeScript "This object exactly holds properties 'A' and 'B', and their values are strings". 
- When building domain configurations or strict dictionaries, prefer `Record` of specific unions over generic index signatures to preserve auto-complete and compiler strictness.

## 2. `keyof` Mechanics

The `keyof` operator extracts the literal property keys of an object type into a union.
- `keyof { a: number; b: string }` -> `'a' | 'b'`
- **Trap**: `keyof { [k: string]: any }` -> `string | number` (because JS implicitly converts numeric keys to strings, meaning both are technically valid keys to access properties on a generic string-indexed object).

## 3. Indexed Access Types (`T[K]`)

You can look up the type of a specific property dynamically using Indexed Access Types.
- If `type Obj = { a: number, b: string }`, then `Obj['a']` is `number`.
- You can look up unions! `Obj['a' | 'b']` -> `number | string`.
- You can look up all values: `Obj[keyof Obj]` -> `number | string`.

## 4. `typeof` in Type Space

TypeScript allows you to generate a Type from a runtime JavaScript value using `typeof`. This is incredibly powerful when combined with `as const`, allowing you to build "Single Source of Truth" schemas in JavaScript and immediately derive TypeScript interfaces from them.

## Exercises

- **Ex01**: Implement a deeply-typed config loader using `keyof` and `T[K]` to enforce that generic getters return the correct specific type based on the requested key.
- **Ex02**: Differentiate `[key: string]` from `Record<Union>` and observe the loss of precision that degrades strictness.
- **Ex03**: Build strictly typed `Getter` and `Setter` wrapper functions utilizing `keyof T`.
- **Ex04**: Use `typeof` and `as const` to infer a domain model from a runtime schema declaration without duplication.
- **Ex05**: Handle the unexpected behaviors when interacting with numeric and `symbol` Object keys.
