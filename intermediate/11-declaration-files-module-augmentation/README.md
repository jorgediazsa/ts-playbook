# Topic 11: Declaration Files & Module Augmentation

Many Senior Engineers are comfortable writing TypeScript, but struggle when integrating with untyped legacy JavaScript libraries or when they need to forcefully inject properties into a third-party's type definition.

## 1. Writing `.d.ts` Files

When you import `my-vendor-lib`, TypeScript looks for types in a specific order:
1. Local `.ts` files.
2. The library's `package.json` `"types"` field.
3. `@types/my-vendor-lib` in `node_modules`.
4. Local type declarations (`.d.ts` files) that use `declare module "my-vendor-lib"`.

You can write ambient modules using:
```ts
declare module 'untyped-lib' {
  export function doSomething(): void;
}
```

## 2. Module Augmentation

Sometimes a library *is* strictly typed, but you are using a plugin that adds properties to its core objects. For example, adding `req.user` to `express`, or adding `store` to a Vue instance.
- You can "re-declare" the module and interface, and TypeScript will **merge** yours into the original.
- **Critical rule**: You must `import` something from the module at the top of your augmentation file for TS to recognize it as a module augmentation rather than a global overwrite.

## 3. Global Scope Pollution (`declare global`)

Sometimes you need to add types to the global `window` object or NodeJS `global` namespace.
- You use `declare global { ... }`.
- **Trap**: If you do this in an ambient file (a file with no `import` or `export`), those globals leak into the entire codebase instantly. If you add it to a file with an `export`, it requires isolation unless explicitly imported!

## Exercises

- **Ex01**: Provide type definitions for a missing untyped `vendor-lib` located in the `fixtures/` directory, satisfying the strict compiler.
- **Ex02**: Augment a mock external API to inject a non-existent plugin method.
- **Ex03**: Safely inject a global variable `__SECURITY_TOKEN__` via `declare global`.

## Local fixture note (repo wiring)

This topic includes a small untyped package at `/intermediate/fixtures/vendor-lib`.
To make `import 'vendor-lib'` resolvable at both runtime and type-check time, the repo should treat it as a local workspace package (e.g., include `intermediate/fixtures/*` in workspaces and install).
