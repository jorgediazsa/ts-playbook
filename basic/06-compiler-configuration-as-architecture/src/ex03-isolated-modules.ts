/**
 * EXERCISE 3: `isolatedModules` Type-Only Exports
 * 
 * When `isolatedModules` is ON, TS requires that types be explicitly imported
 * and exported using the `type` keyword. This ensures transpilers (like SWC/Vite)
 * know what code can be safely stripped out of the transpiled JS file without
 * needing to parse the entire dependency tree.
 * 
 * GOAL:
 * 1. Read `DatabaseSchema` (a pure type).
 * 2. Notice the compiler error on the `export { DatabaseSchema }` statement.
 * 3. Fix the export statements so it satisfies `isolatedModules`.
 */

export interface DatabaseSchema {
    users: { id: string; name: string }[];
    posts: { id: string; title: string; authorId: string }[];
}

export const DB_VERSION = 1.0;

// In isolated transpilers, export/import types explicitly when re-exporting:
//   export type { SomeType } from './x'
// For local declarations, exporting the interface/type is sufficient.
