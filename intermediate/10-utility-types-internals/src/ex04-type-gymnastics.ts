/**
 * EXERCISE 4: Type Gymnastics (When to stop)
 * 
 * It is possible to write incredibly complex parsers entirely within the type system.
 * This is almost always a terrible idea for production code. 
 * 
 * GOAL:
 * 1. Read `OverEngineeredRouteParser`. It attempts to parse a string like 
 *    `"/api/users/:id/posts/:postId"` and extract a tuple of the dynamic segments `['id', 'postId']`.
 * 2. It is unreadable. Your team wants to delete it.
 * 3. Rewrite the expected output into a simple, maintainable type block.
 *    Sometimes, hardcoding a union or a specific mapping is far better than a 100-line type-level generic equation.
 * 4. Refactor `RouteParams` so it simply evaluates to `{ id: string; postId: string }` without the gymnastics.
 */

// DO NOT USE THIS IN PRODUCTION
export type OverEngineeredRouteParser<T extends string> = string extends T
    ? string[]
    : T extends `${string}/:${infer Param}/${infer Rest}`
    ? [Param, ...OverEngineeredRouteParser<`/${Rest}`>]
    : T extends `${string}/:${infer Param}`
    ? [Param]
    : [];

// ------------------------------------------------------------------

// TODO: Replace this entire calculation with a simple, readable mapped type
// that evaluates to `{ id: string; postId: string }`.
// Ditch the parser. Hardcode the expected result based on the route string for maintainability.

export type RouteParams = {
    [K in OverEngineeredRouteParser<"/api/users/:id/posts/:postId">[number]]: string; // FIX ME - REMOVE THE GYMNASTICS
};

// ------------------------------------------------------------------

export function fetchRoute(route: "/api/users/:id/posts/:postId", params: RouteParams) {
    return `/api/users/${params.id}/posts/${params.postId}`;
}
