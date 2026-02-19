/**
 * EXERCISE 2: Route Params Extraction
 * 
 * Standard routing libraries (Express, React Router) accept strings like `/users/:id`.
 * We want to statically extract `{ id: string }` from that literal type.
 * 
 * GOAL:
 * 1. Implement `RouteParams<T>`.
 * 2. It scans for segments starting with `:`.
 * 3. It returns an object mapping explicitly those segments to `string`.
 */

// TODO: Implement RouteParams.
// Hint: If T extends `${infer Start}/:${infer Param}/${infer Rest}`, it has a middle param.
// If T extends `${infer Start}/:${infer Param}`, it has an end param.
// Return `{ [K in Param | OtherParams]: string }`
export type RouteParams<T extends string> = T; // FIX ME

// ------------------------------------------------------------------

export function navigate<T extends string>(path: T, params: RouteParams<T>) {
    // implementation hidden
}

// Ensure this works smoothly once RouteParams is fixed!
navigate('/users/:userId/posts/:postId', {
    // FIX ME: This currently errors because RouteParams doesn't resolve to an object yet
    userId: '1',
    postId: '2'
});
