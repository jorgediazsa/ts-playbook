# Topic 6: Compiler Configuration as Architecture

In modern TypeScript, the `tsconfig.json` is not just a build tool configuration—it is an architectural contract. The flags you choose determine how strict your application modeling must be and how much runtime safety you guarantee.

A permissive TS codebase often gives a false sense of security, leading to the same crash rates as vanilla JavaScript.

## 1. Key Stricness Flags (The "Strict" Family isn't enough)

While `"strict": true` enables things like `strictNullChecks`, it intentionally omits several highly opinionated (but incredibly valuable) flags.

| Flag | What it prevents | Migration Pain |
| :--- | :--- | :--- |
| `noUncheckedIndexedAccess` | Assumes arrays and objects might return `undefined` when accessed dynamically via `arr[0]` or `obj[key]`. Prevents "undefined is not a function" crashes. | **High.** Forces you to add `if (val)` checks or optional chaining everywhere. |
| `exactOptionalPropertyTypes` | Prevents you from explicitly setting a property to `undefined` if it was declared as optional (`foo?: string`). Distinguishes between "key is missing" and "key is present but undefined". | **Medium.** Breaks poorly typed API request wrappers. |
| `noImplicitOverride` | Forces you to use the `override` keyword when overriding a parent class method. Prevents broken overrides if the parent is refactored. | **Low.** Simple to auto-fix. |

## 2. Bundler Alignment Flags

Transpilers (Vite, SWC, Babel, ESBuild) and Node.js have their own environments. TS must be configured to match *their* reality, otherwise TS will say your code is fine but it will crash at runtime/build-time.

| Flag | The Reality it Enforces |
| :--- | :--- |
| `isolatedModules` | Forces you to write code that can be safely, individually transpiled without type-checker context (which is how Vite and SWC work). Prevents cross-file `const enum` usage and forces `import type`. |
| `moduleResolution` | Setting this to `Bundler` or `NodeNext` teaches TS how to properly read `package.json` `exports` maps and whether file extensions (`.js`) are required in imports. |

## Runtime Correctness

The choices in your `tsconfig.json` directly map to runtime bugs. 
- No `exactOptionalPropertyTypes`? You might accidentally send `{"name": "Alice", "age": undefined}` to an API that crashes because it expected the `age` key to be omitted entirely if not provided.
- No `noUncheckedIndexedAccess`? You will confidently iterate over `data[100].name` and crash the UI.

## Exercises in this Module

- **Ex01 (`ex01-unchecked-indexed-access.ts`)**: Learn how to safely parse dynamic structures when TS stops trusting arrays.
- **Ex02 (`ex02-exact-optional-properties.ts`)**: Model API payloads to distinguish between missing keys and explicit undefined values.
- **Ex03 (`ex03-isolated-modules.ts`)**: Fix a failing bundler build caused by improper re-exports of types.
