# Topic 7: Generics Deep Dive

Generics are the lifeblood of advanced TypeScript, allowing functions and classes to operate over a variety of types while remaining strictly typed. However, for senior engineers, understanding *how* the compiler infers those types, validates constraints, and handles variance is critical to writing maintainable libraries.

## 1. Constraints and Default Generics

- **Constraints (`extends`)**: When you use `<T extends U>`, you restrict `T` to be at least as specific as `U`. This allows you to safely access properties of `U` on `T` inside the function, while preserving the exact type of the argument.
- **Default Generics (`<T = string>`)**: Defaults provide DX (Developer Experience) improvements by allowing consumers to omit generic arguments when a sensible default makes sense (e.g., `interface Result<T, E = Error>`).

## 2. Variance: Covariance, Contravariance, Invariance, and Bivariance

Variance describes how subtyping relationships flow when complex types are composed.

- **Covariance** ("same direction"): If `Dog extends Animal`, then `Array<Dog> extends Array<Animal>`. The structured type is covariant over its parameter. Almost all objects and arrays in TS are covariant (which is actually technically unsafe for mutable arrays, but allowed for usability).
- **Contravariance** ("opposite direction"): Function parameters. If `Dog extends Animal`, a callback `(animal: Animal) => void` can correctly satisfy the type `(dog: Dog) => void` (because it can safely handle ANY animal, so it can surely handle a dog). However, the reverse is unsafe.
- **Invariance**: A type parameter where neither covariant nor contravariant assignment is allowed. (Usually when a generic appears in both input and output positions).
- **Bivariance**: TypeScript intentionally chose to make method parameters *bivariant* (both covariant and contravariant) strictly for backwards compatibility with legacy UI event patterns (like DOM handlers). This is an overt hole in the type system. You can switch to strict contravariance by using `strictFunctionTypes: true` and defining callbacks using arrow-function property syntax (`onEvent: (e: Event) => void`) rather than method syntax (`onEvent(e: Event): void`).

## 3. Inference Failure Modes You'll Actually Hit

- **Overload vs Generic Inference**: Sometimes TS struggles to infer generics if an overload is involved. A generic function is often preferred to an overload set.
- **Widenings in tuples**: `[1, 2]` is inferred as `number[]`. If you need a tuple `[number, number]`, you either need a helper function rest parameter `...args: T` or `as const`.
- **Conditional inference**: `T extends SomeType ? InferHere : Never` requires `T` to be structurally identical or narrowed first.

*When to stop and simplify types:* If you have nested conditional recursive types, or a single function signature has 5+ type parameters with complex intersections, compiler performance drops and hover-docs become unreadable. A slightly looser type with runtime checks is often superior.

## 4. Higher-Kinded Types (HKTs) Simulation

TS lacks native HKTs (the ability to write `interface Functor<F> { map: <T, U>(f: (x: T) => U, functor: F<T>) => F<U> }`).
We typically simulate them using "Defunctionalization" and interface merging (the "fp-ts" or "fp-ts/hkts" pattern), where an interface maps type tags to concrete applied types.

## Exercises

- **Ex01**: Constraints (`pluck` helper).
- **Ex02**: Default generics (`Result<T, E>`).
- **Ex03**: Variance inside an Event Handler structure.
- **Ex04**: Bivariance holes in callback props.
- **Ex05**: Fixing inference traps.
- **Ex06**: HKT simulation inside a repository pattern.
