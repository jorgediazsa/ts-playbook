# Topic 12: Conditional Types

Conditional types form the backbone of TypeScript's metaprogramming capabilities. They allow you to define types that adapt based on the types passed to them, operating similarly to ternary statements in JavaScript: `T extends U ? X : Y`.

## 1. Distributive Conditional Types

The most critical (and confusing) behavior of conditional types is **Distribution**.
When a conditional type operates on a **bare type parameter** (`T`), and `T` is a union (e.g., `'A' | 'B'`), TypeScript evaluates the condition independently for each member of the union, and then unions the results back together.

```ts
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>;
// Evaluates to: (string extends any ? string[] : never) | (number extends any ? number[] : never)
// Result: string[] | number[]
```

**Common Trap:** What if you actually wanted `(string | number)[]`?
Distribution only happens on bare type parameters. To disable distribution, wrap the parameter in a tuple:
```ts
type ToArrayNonDistributive<T> = [T] extends [any] ? T[] : never;
type Result = ToArrayNonDistributive<string | number>; 
// Result: (string | number)[]
```

## 2. Pattern Matching with `infer`

Within the `X` (true) branch of `T extends U ? X : Y`, you can use the `infer` keyword to declare a new type variable that TypeScript will capture from the structure of `T`.

```ts
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

**Trap:** `infer` can fail or behave unexpectedly with highly overloaded functions or intersections. It generally infers from the *last* signature of an overloaded function.

## 3. Detecting Special Types (`any`, `never`, `unknown`)

Special types require special conditions.
- `never` represents an empty set. Because distributive conditionals distribute over the members of a union, distributing over `never` (0 members) results in 0 evaluations, returning `never`. To check for `never`, you must disable distribution: `[T] extends [never]`.
- `any` acts as both the supertype and subtype of almost everything. It can bypass standard strict equality checks.
- `unknown` is the top type; everything extends `unknown`, but `unknown` only extends `unknown` and `any`.

## 4. Compiler Performance Blowups (Stop Signs)

Conditional types evaluated in deep recursive patterns result in exponential type instantiation costs. If you write `type A = B extends C ? D : E` and `D`/`E` are massively complex conditionals, the TypeScript Language Server (TSServer) will slow down.
- **Rule of Thumb:** If a conditional type requires more than 4 nested ternary branches, it should probably be refactored or simplified.
- **Memoization limitation:** TypeScript does not memoize the results of deeply nested conditional types efficiently across files natively if not explicitly constrained.

## Exercises

- **Ex01**: Implement utilities to strictly identify `IsNever`, `IsAny`, and `IsUnknown` handling all edge cases.
- **Ex02**: Fix a buggy utility using the `[T]` (NoDistribute) wrapping pattern.
- **Ex03**: Build generic `Flatten<T>` and `UnwrapPromise<T>` leveraging `infer`.
- **Ex04**: Re-implement core utilities `ReturnType`, `Parameters`, and `Awaited`.
- **Ex05**: Refactor a complex conditional type that causes performance drops by simplifying its branching logic.
