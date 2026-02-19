# TypeScript Roadmap: From Zero to Expert (Senior-Oriented)

---

# Basic (Core Philosophy & Foundations)

## [1. TypeScript Mental Model](./basic/01-typescript-mental-model/)
- Structural typing vs simulated nominal typing
- Type erasure: compile-time only guarantees
- Where TypeScript is intentionally unsound
- The cost of unsoundness in large systems

## [2. Top, Bottom & Special Types](./basic/02-top-bottom-special-types/)
- `any` vs `unknown` (escape hatches)
- `never` and exhaustiveness guarantees
- `void` vs `undefined`
- `object` vs `{}` vs `Record<string, unknown>`

## [3. Type Inference & Control Flow](./basic/03-type-inference-control-flow/)
- Contextual typing
- Control Flow Analysis internals
- Narrowing via guards, truthiness, equality
- Literal widening rules
- `as const`
- The `satisfies` operator (TS 4.9+)

## [4. Interfaces vs Type Aliases](./basic/04-interfaces-vs-type-aliases/)
- Expressiveness differences
- Declaration merging mechanics
- Recursive types behavior
- Performance implications in large codebases

## [5. Enums, Const Enums & Union Patterns](./basic/05-enums-const-enums-union-patterns/)
- Runtime cost of enums
- Tree-shaking implications
- When unions + objects are superior
- Reverse mappings and pitfalls

## [6. Compiler Configuration as Architecture](./basic/06-compiler-configuration-as-architecture/)
- `strict` family flags
- `noUncheckedIndexedAccess`
- `exactOptionalPropertyTypes`
- `isolatedModules`
- `moduleResolution` differences
- How tsconfig affects runtime correctness

---

# Intermediate (Mastering the Type System)

## [7. Generics Deep Dive](./intermediate/07-generics-deep-dive/)
- Constraints (`extends`)
- Default generics
- Variance theory applied to TS
- Bivariance in function parameters
- Generic inference traps
- Higher-kinded type simulation patterns

## [8. Type Guards & Exhaustiveness](./intermediate/08-type-guards-exhaustiveness/)
- Custom type predicates
- Assertion functions (`asserts`)
- Discriminated unions as algebraic data types
- Exhaustive switch enforcement
- Pattern matching limitations

## [9. Index Signatures & Key Manipulation](./intermediate/09-index-signatures-key-manipulation/)
- Index signatures vs mapped types
- `keyof` mechanics
- `typeof` in type space
- Indexed access types (`T[K]`)
- Key constraints and safe dynamic access

## [10. Utility Types Internals](./intermediate/10-utility-types-internals/)
- Rebuilding:
  - `Partial`
  - `Required`
  - `Readonly`
  - `Record`
- Set utilities:
  - `Pick`
  - `Omit`
  - `Exclude`
  - `Extract`
  - `NonNullable`
- Deep utility patterns and recursion risks

## [11. Declaration Files & Module Augmentation](./intermediate/11-declaration-files-module-augmentation/)
- Anatomy of `lib.d.ts`
- Writing `.d.ts` files
- Module augmentation
- `declare global`
- Avoiding global pollution

---

# Advanced (Type-Level Programming & Architecture)

## [12. Conditional Types](./advanced/12-conditional-types/)
- Semantics: `T extends U ? X : Y`
- Distributive behavior
- Preventing distribution with wrappers
- Pattern matching with `infer`
- Extracting return types and parameters

## [13. Advanced Mapped Types](./advanced/13-advanced-mapped-types/)
- Modifiers (`+readonly`, `-?`)
- Key remapping (`as`)
- Recursive mapped types
- Compiler recursion depth limits

## [14. Template Literal Types](./advanced/14-template-literal-types/)
- String manipulation in type space
- Extracting route params
- Event name derivation
- Combining with conditional types

## [15. Nominal Typing & Branded Types](./advanced/15-nominal-typing-branded-types/)
- Opaque types
- Preventing accidental mixing of primitives
- Domain modeling with branded types

## [16. Function Typing at Scale](./advanced/16-function-typing-at-scale/)
- Overloads vs unions
- Currying inference patterns
- Strongly typed event emitters
- Callback variance correctness

## [17. Large-Scale Architecture Patterns](./advanced/17-large-scale-architecture-patterns/)
- Project References (`composite`)
- Monorepo strategies
- `Node16` vs `nodenext` vs `bundler`
- Build performance optimization
- Type-checking performance bottlenecks

## [18. Migration & Integration Strategies](./advanced/18-migration-integration-strategies/)
- Incremental JS → TS migration
- `allowJs` and `checkJs`
- Strictness ramp-up strategy
- Writing type-safe custom ESLint rules
- Managing third-party unsafely typed libraries
