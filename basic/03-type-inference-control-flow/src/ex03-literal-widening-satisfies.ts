/**
 * EXERCISE 3: Literal Widening and `satisfies`
 * 
 * When writing configurations, TS eagerly "widens" literal strings to `string`.
 * 
 * Example: `const config = { method: "POST" }` infers as `{ method: string }`.
 * When passed to `fetch(url, config)`, it fails because `method` must be 
 * strictly `"GET" | "POST"`.
 * 
 * GOAL:
 * You have a `RouteConfig` type dictionary. You want to define `myRoutes` 
 * and export it. It MUST respect the `RouteConfig` shape (no typos!), 
 * but it MUST NOT lose its exact string literals, because you want them inferred 
 * for other parts of the app to use safely.
 * 
 * 1. Try assigning `const myRoutes: RouteConfig = { ... }`. Notice it loses literal fidelity.
 * 2. Try `const myRoutes = { ... } as const`. Notice it might contain typos not caught by `RouteConfig`.
 * 3. Use the `satisfies` operator to get the best of both worlds!
 */

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type RouteConfig = Record<string, {
    method: HttpMethod;
    handler: string;
}>;

// ------------------------------------------------------------------
// The Widening Trap
// ------------------------------------------------------------------

// TODO: Fix this declaration.
// If you leave it as is, `typeof myRoutes.login.method` is `string` instead of `'POST'`.
// If you cast it `as typeof RouteConfig`, it validates shape but loses literals.
// If you use `as const`, it preserves literals but allows typos in the keys/handlers.
// Use `satisfies RouteConfig` (with some `as const` sprinkling if needed) so that:
// 1. You cannot make a typo (like `metod: 'POST'`).
// 2. The literal values are perfectly preserved for the type system.
export const myRoutes = {
    login: {
        method: 'POST',
        handler: 'Auth.login'
    },
    logout: {
        method: 'DELETE',
        handler: 'Auth.logout'
    }
}; // FIX ME: add `satisfies` and maybe `as const`

// ------------------------------------------------------------------
// The Consumer (Proves your types)
// ------------------------------------------------------------------

// If `myRoutes` is typed correctly, TS will know that exact valid values are 'POST' and 'DELETE'.
type LoginMethod = typeof myRoutes.login.method;

// This function exists to test your types.
export function executeLogin(method: LoginMethod) {
    return `Executing ${method} request...`;
}
