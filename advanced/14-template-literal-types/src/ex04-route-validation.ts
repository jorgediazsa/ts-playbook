/**
 * EXERCISE 4: Validating Dynamic Route Composition
 * 
 * We want to accept a dynamic string that represents a composition of permissions,
 * e.g., "read:users" | "write:posts", but we want to strictly validate it against
 * known actions and resources using template literal validation.
 * 
 * GOAL:
 * 1. Implement `ValidatePermission<T>`
 * 2. It must enforce that T takes the form `${Action}:${Resource}`.
 * 3. Actions can ONLY be 'read', 'write', or 'delete'.
 * 4. Resources can ONLY be 'users', 'posts', or 'comments'.
 * 5. If T is valid, return T. Otherwise, return the exact error message string: 
 *    `"Invalid permission format or unknown action/resource"`
 */

type Action = 'read' | 'write' | 'delete';
type Resource = 'users' | 'posts' | 'comments';

// TODO: Use template literal conditionals and infer.
// Hint: Check if T extends `${infer A}:${infer R}`. 
// Then check if A extends Action and R extends Resource.
export type ValidatePermission<T extends string> = T; // FIX ME

// Example wrapper function
export function checkPermission<T extends string>(
    // By intersecting with ValidatePermission, if they pass a bad string,
    // the type becomes `"Invalid permission format..."`, forcing a type error alerting the user!
    permission: T extends ValidatePermission<T> ? T : ValidatePermission<T>
) {
    // ...
}
