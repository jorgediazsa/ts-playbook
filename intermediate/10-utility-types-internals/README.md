# Topic 10: Utility Types Internals

TypeScript provides a robust standard library of utility types (e.g., `Partial`, `Pick`, `Omit`). Senior engineers must know exactly how they are implemented under the hood, how to build custom deeper variations, and critically: **when to stop**.

## 1. Mapped Types (Rebuilding Objects)

Mapped types iterate over keys to build new object types.
Syntax: `[K in keyof T]`.
- `Partial<T>` adds the `?` modifier to every key.
- `Required<T>` removes the `?` modifier using `-?`.
- `Readonly<T>` adds the `readonly` modifier.
- `Record<K, T>` iterates over a set of keys `K` and assigns value type `T`.

## 2. Set Utilities (Union filtering) and Distributive Conditionals

When you pass a union to a conditional type (`T extends U ? X : Y`), TS "distributes" the condition across each member of the union independently. This is called **Distributive Conditional Types**.
- `Exclude<T, U>`: "Loop through union `T`. If it extends `U`, throw it away (`never`), otherwise keep it". 
- `Extract<T, U>`: The opposite of `Exclude`.
- `NonNullable<T>`: Excludes `null | undefined`.

Object masking utilities rely on these operations combined with `keyof` and Mapped Types:
- `Pick<T, K>`: Iterate only over keys `K` (which is a subset of `keyof T`) and extract `T[K]`.
- `Omit<T, K>`: It is strictly implemented as `Pick<T, Exclude<keyof T, K>>`.

## 3. Deep Utility Patterns & Recursion Risks

Standard utilities are **shallow** (they do not affect nested objects). If you want `DeepPartial`, you must recursively apply `DeepPartial` to object property values.
- **Risks**: Recursive types have a maximum instantiation depth. If you feed `DeepPartial` a recursive domain model or a complex DOM object, the TypeScript compiler will crash or run extremely slow (`Type instantiation is excessively deep and possibly infinite`).
- **Best Practice**: Cap recursion depth manually or only use Deep utilities on simple JSON-like configurations.

## 4. "Type Gymnastics" - When to Stop

It is possible to write a full SQL query parser entirely in the TypeScript type system using extreme template literal inference, recursive tuples, and conditionals. **You should almost never do this in production code.**
- Complex types degrade IDE hover-tooltips for consumers (seeing `{ a: Pick<X, 'y'> }` instead of the actual resolved keys).
- Complex types drastically slow down compilation (`tsc` type-checking phase).

## Exercises

- **Ex01**: Re-implement standard object utilities (`Partial`, `Required`, `Readonly`, `Record`).
- **Ex02**: Re-implement set utilities and understand Distributive Conditional mechanics.
- **Ex03**: Build `DeepPartial` and `Mutable` implementations.
- **Ex04**: A "refactor" exercise: simplify an unmaintainable puzzle-box type into an exact, readable interface.
