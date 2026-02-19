/**
 * EXERCISE 3: `declare global`
 * 
 * Your build tool (like Vite or Webpack) statically replaces `__AUTH_TOKEN__`
 * with a string during the build step. This means `__AUTH_TOKEN__` exists
 * globally at runtime, but TypeScript thinks it is undefined.
 * 
 * GOAL:
 * 1. Read `getToken`. It attempts to read `__AUTH_TOKEN__`.
 * 2. It fails because it cannot find the name.
 * 3. Use `declare global` to inject `__AUTH_TOKEN__` into the global scope
 *    as a `string`.
 */

// This empty export creates an isolated module scope.
// Without an import or export, this file would be an ambient script 
// and `declare global` wouldn't be allowed (it would just be `declare const`).
export { };

// TODO: Inject __AUTH_TOKEN__ horizontally into the global namespace.
declare global {
    // FIX ME
}

export function getToken() {
    // FIX ME: Cannot find name '__AUTH_TOKEN__'.
    return __AUTH_TOKEN__;
}
