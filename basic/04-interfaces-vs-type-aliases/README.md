# Topic 4: Interfaces vs Type Aliases

A common question for TypeScript beginners is "Should I use `interface` or `type`?". For Senior Engineers, the answer requires understanding the underlying mechanics of the compiler, declaration merging, recursion depth, and type-checker performance.

## 1. Expressiveness & Mental Model differences

- **`type` (Type Aliases)**: These are just names for *any* type in the type system. They can represent primitives, unions, intersections, tuples, and mapped types. They are evaluated eagerly or lazily depending on context but generally act as exact mathematical sets.
- **`interface`**: These represent the *shape* of an object (or a function/class signature). They cannot represent primitives or unions directly.

**Rule of Thumb for Seniors**: Use `interface` for object shapes, class designs, and anything that might be extended. Use `type` for unions, mapped types, and complex conditional type-level programming.

## 2. Declaration Merging

The most critical difference is that **interfaces are open** and **type aliases are closed**.

If you declare the same `interface` twice in the same scope, TS will merge them into one. This is how the DOM types work (e.g., you can add strictly typed custom fields to `window` by re-declaring `interface Window`).
Type aliases cannot be changed once declared. If you try to declare the same `type` twice, you get a compiler error.

## 3. Recursive Types Behavior

When modeling recursive structures (like a JSON object, a file tree, or a linked list), both `interface` and `type` can refer to themselves. However:
- `interface` leverages the object-oriented cache in the TS compiler. It handles deep recursion much more cleanly because the compiler knows it's navigating a stable object shape.
- `type` aliases can sometimes trigger "Type instantiation is excessively deep and possibly infinite" errors much earlier because TS tries to eagerly evaluate the alias through complex conditional logic.

## 4. Type Checker Performance: What Actually Hurts

Performance is the hidden metric of advanced TypeScript. In large monorepos, bad types cause CI times to spike.

- **Intersection Explosion**: Doing `type A = B & C & D` is an intersection. When TS type-checks intersecting types, it creates a massive matrix of combinations. Intersecting multiple complex types creates $O(N^2)$ or even $O(2^N)$ work for the compiler.
- **Interface Extension**: Doing `interface A extends B, C, D` is an extension. TS evaluates this flatly and builds a single cached object shape. It is $O(N)$ work.
- **Takeaway**: If you have a base `Config` and 5 different plugin configs, extending them via `interface` is orders of magnitude faster for the compiler than intersecting them via `type ... = Config & PluginA & PluginB`.

## Exercises in this Module

- **Ex01 (`ex01-declaration-merging.ts`)**: Implement a plugin system using Declaration Merging so third-party consumers can type-safely add methods to your core module.
- **Ex02 (`ex02-recursive-types.ts`)**: Build a recursive AST (Abstract Syntax Tree) node structure, demonstrating when to use `interface` vs `type`.
- **Ex03 (`ex03-intersection-explosion.ts`)**: Refactor an excessively deep `type` intersection into an `interface extends` hierarchy to save checker performance.
