# Topic 18: Migration & Integration Strategies

When operating at a senior level, you rarely start Green Field projects. You usually integrate TypeScript into massive legacy JavaScript applications, or integrate untyped (or dangerously typed) external libraries.

## 1. Incremental JS -> TS Migration

TypeScript doesn't have to be an all-or-nothing rewrite. You can weave it safely into an existing JS codebase.

### The Ramp-Up Strategy
**Step 1:** Allow JS. Enable `"allowJs": true`. Change absolutely nothing. The compiler now tracks JS files structurally but doesn't complain.
**Step 2:** Check JS. Enable `"checkJs": true`. Now TS looks at JSDoc tags (`/** @type {string} */`) and infers types for JS files. You suppress impossible errors with `// @ts-expect-error` or `// @ts-nocheck`.
**Step 3:** The Boundary. Start renaming `*.js` to `*.ts` at the *leaves* of your dependency graph (Utils, constants) and work your way up to React Components / Controllers.
**Step 4:** Strict Mode. Enable `"strict": true` globally and use a ratchet script to ensure the number of `ts-expect-error` comments only goes down, never up.

## 2. Dealing with Dangerous Third-Party Types

Sometimes an NPM package ships with wildly inaccurate types. Example: A library `fake-analytics` claims `capture(event: string): boolean`, but actually returns `Promise<boolean>`, causing race conditions!

**Mitigations:**
- **Module Augmentation**: If it's a minor addition, `declare module "fake-analytics"` to append missing methods.
- **The Wrapper Pattern**: Do NOT use the library directly. Create `src/lib/analytics.ts`, wrap the call, forcefully cast it `as unknown as Promise<boolean>`, and expose the *safe* wrapped version to your app.

## 3. Custom ESLint Type-Aware Rules

Standard ESLint rules only see raw AST. TypeScript ESLint rules (`@typescript-eslint/utils`) have access to the **Type Checker**. You can write custom, project-specific rules that understand types (e.g., "Ban `any` from crossing module boundaries").

## Exercises

- **Ex01: Legacy JS Migration**: Look in `fixtures/legacy-js`. Follow the exercises in `fixtures/legacy-js/README.md` to typecheck this untyped code using JSDoc. Run `pnpm advanced:18:typecheck`.
- **Ex02: Boundary Mitigations**: Look at `src/ex02-unsafe-vendor.ts`. Wrap an unsafe third party library.
- **Ex03: Custom Linting**: Review `src/ex03-custom-rule.ts`. See how the TypeScript AST is queried to enforce architectural strictness (a minimal custom rule simulation).
