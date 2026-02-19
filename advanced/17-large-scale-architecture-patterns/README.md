# Topic 17: Large-Scale Architecture Patterns

When TypeScript operates on codebases exceeding hundreds of thousands of lines, compiler performance (`tsc`) and IDE responsiveness drop drastically. Senior engineers must architecture projects to keep feedback loops fast.

## 1. Project References (`composite: true`)

TypeScript 3.0 introduced **Project References**. Instead of parsing one massive AST, the project is sliced into distinct `tsconfig.json` boundaries. 
- A dependency output (`.d.ts` and `.js`) is built first.
- Downstream projects depend on those `.d.ts` declarations, rather than re-checking the source code.
- Run builds incrementally with `tsc -b` (Build Mode).

**When it breaks:** If `packageA` imports `packageB`, but `packageA`'s `tsconfig.json` lacks a `reference` to `packageB`, TypeScript falls back to slow, inaccurate source parsing, or fails entirely.

## 2. Diagnosing Slow Builds & `skipLibCheck`

Sometimes, a single library provides a "Pathological Type" (like a deeply nested conditional union) that makes the compiler calculate hundreds of thousands of combinations.

**Bottleneck Playbook:**
1. Run `tsc --extendedDiagnostics` to see if `Check time` or `Parse time` is the culprit.
2. Run `tsc --generateTrace trace` and drop it into edge/chrome tracing (`about:tracing`) to find the exact file/type destroying the compiler.
3. Use `skipLibCheck: true`. This prevents TS from checking `.d.ts` files inside `node_modules`. **Warning:** If you have broken global augmentations, you might not find out until runtime!

## 3. Module Resolution Architectures

How `import { foo } from "bar";` finds the file `bar`:
- **`node` (classic)**: Looks for `node_modules/bar/index.js`.
- **`node16` / `nodenext`**: Respects `package.json` `"exports"`, enforces file extensions in relative imports (`import "./utils.js"` in TS files!), and understands CJS/ESM interop.
- **`bundler`**: Modern TS (5.0+) setting for Vite/Webpack/ESBuild. Respects `exports` but allows extensionless imports, knowing the bundler will figure it out.

**Trap:** You can set `moduleResolution: bundler`, successfully typecheck, but crash in production Node.js if you try to execute it as native ESM without extensions.

## Exercises

All exercises are in `fixtures/monorepo/`.

- **Ex01**: Run `pnpm advanced:17:build`. It currently fails because the Project Reference graph is broken. Fix `app/tsconfig.json` and `core/tsconfig.json`.
- **Ex02**: `utils` contains a computationally impossible type. Fix `utils/src/heavy.ts` or add `skipLibCheck` where appropriate to bring build times down from infinity to milliseconds.
- **Ex03**: `moduleResolution` differences. Examine `app/src/index.ts`. Notice how `bundler` allows importing without `.js`, but Node will crash if run directly.
