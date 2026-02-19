# Topic 1: TypeScript Mental Model

Welcome to the foundation of advanced TypeScript. To master TS, you must first understand the fundamental philosophy and constraints under which the compiler was designed.

## 1. Structural Typing vs Nominal Typing
TypeScript uses **Structural Typing** (also known as "duck typing"). If a type has all the properties required by another type, they are considered compatible, regardless of their origin or name.
- **Languages like Java or C#** use Nominal Typing: two classes with the same structure are *not* compatible unless one inherits from the other.
- **Trade-off:** Structural typing is incredibly flexible for JavaScript's dynamic nature but leads to accidental compatibility (e.g., passing a `Dog` to a function expecting a `Cat` just because both have a `name: string`).
- **Solution:** We can simulate nominal typing using **Branded Types** (or Opaque Types) to prevent this.

## 2. Type Erasure: Compile-time vs Runtime
TypeScript types are an **illusion** that exist only at compile-time. When your code is transpiled to JavaScript, all type information is erased.
- **The Pitfall:** You can lie to the compiler (`as string`) or receive unexpected data from an API (`fetch()` returns `Promise<any>`). The compiler assumes you are telling the truth, leading to runtime crashes if the data shape doesn't match the compile-time type.
- **Solution:** At the boundaries of your system (APIs, LocalStorage, User Input), you *must* validate data at runtime (e.g., using Zod) and then infer the static type from the validation schema.

## 3. Unsoundness
A type system is "sound" if it guarantees that a value at runtime will *always* match its compile-time type. TypeScript is intentionally **unsound** by design in specific areas to preserve ease of use and interoperability with JS.
- **Array Covariance (Unsoundness):** In TS, reading from and writing to arrays can lead to a type mismatch if you alias an array of subtypes to an array of supertypes.
- **Function Parameter Bivariance (Unsoundness without strictFunctionTypes):** A historic design choice in TS where function arguments were both covariant and contravariant. (Partially fixed with `strictFunctionTypes: true`).
- **Index Signatures:** Fetching an out-of-bounds index from an array `const x = arr[100]` returns the element type, not `undefined` (unless you enable `noUncheckedIndexedAccess`).

## Exercises in this Module:

- **Ex01 (`ex01-structural-vs-nominal.ts`)**: Implement a Branded Type to solve accidental structural compatibility in an API client.
- **Ex02 (`ex02-type-erasure.ts`)**: Demonstrate the type erasure trap with JSON parsing and fix it using a runtime schema validator mock.
- **Ex03 (`ex03-unsoundness.ts`)**: Fix bugs caused by array covariance and unsafe indexing using stricter TS primitives.
