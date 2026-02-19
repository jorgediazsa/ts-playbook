# Topic 5: Enums, Const Enums & Union Patterns

In the early days of TypeScript, `enum` was one of the few features that added *runtime* code to JavaScript. Today, the TS team generally avoids adding runtime features, making enums a historical anomaly with several significant footguns for large codebases.

## 1. The Standard `enum`
When you declare an `enum Status { Active, Inactive }`, TypeScript emits an IIFE (Immediately Invoked Function Expression) in the compiled JavaScript.
- **Tree-shaking Pitfall**: Because it's an IIFE, many bundlers (like Webpack or Rollup) cannot statically determine if evaluating the IIFE has side effects. Therefore, they cannot safely "tree-shake" (remove) the enum if it goes unused, bloating your final bundle.
- **Reverse Mappings**: Numeric enums in TS automatically create reverse mappings. `Status.Active` is `0`, but `Status[0]` is `"Active"`. This hidden object pollution causes strange bugs when iterating over `Object.keys()`.

## 2. The `const enum`
To solve the bundle bloat, TS introduced `const enum`. It completely erases the enum at compile time and merely inlines the raw values where they are used.
- `const enum Status { Active = 1 }` used as `let x = Status.Active` compiles strictly to `let x = 1`.
- **The `isolatedModules` Pitfall**: If you use Vite, Babel, esbuild, or SWC to transpile your TS (which is the modern standard), they compile files *one at a time* (`isolatedModules: true`). Because they don't have the full program context, they cannot safely inline `const enum` values exported from another file. Doing so can cause runtime crashes or compiler errors.

## 3. The Modern Standard: Unions + `as const`
In 2025, the safest and most standard pattern for defining a set of constants in TS is using standard JavaScript objects combined with the `as const` assertion.
- Pure JavaScript runtime representation (no IIFEs, tree-shakes perfectly).
- No hidden reverse mappings.
- Safe across all bundlers and transpilers.

```ts
export const Status = {
  Active: 'ACTIVE',
  Inactive: 'INACTIVE'
} as const;

// Extract the type from the object values
export type Status = typeof Status[keyof typeof Status]; // 'ACTIVE' | 'INACTIVE'
```

## Exercises in this Module

- **Ex01 (`ex01-runtime-footprints.ts`)**: Look at how different enum constructions compile and cause bugs with Object iteration (reverse mappings).
- **Ex02 (`ex02-isolated-modules.ts`)**: Understand why `const enum` breaks down in modern bundler environments (`isolatedModules`).
- **Ex03 (`ex03-modern-enum-pattern.ts`)**: Implement the bulletproof `as const` + `satisfies` dictionary mapped to a union type.
