/**
 * EXERCISE 1: Structural vs Nominal Typing
 * 
 * In TypeScript, types are structural. This means replacing a `UserId` with a `PostId`
 * is perfectly valid if both are just aliases for `string`. This causes bugs in
 * large codebases where an API might accept the wrong ID type.
 * 
 * GOAL:
 * 1. Implement a `Brand<K, T>` utility type to simulate Nominal Typing.
 * 2. Update `UserId` and `PostId` to be branded strings.
 * 3. Implement the `createUserId` and `createPostId` constructor functions securely.
 * 4. Ensure the `deleteUser` function rejects a `PostId`.
 */

// TODO: Fix this implementation to prevent accidental structural compatibility.
// Keep it a string at runtime, but tag it at compile-time.
export type Brand<K, T> = T; // <-- Fix this

export type UserId = string; // <-- Make this a Branded string called 'UserId'
export type PostId = string; // <-- Make this a Branded string called 'PostId'

export function createUserId(id: string): UserId {
    // TODO: Fix this function to satisfy the new branded type 
    // without incurring an actual runtime cost
    return id;
}

export function createPostId(id: string): PostId {
    // TODO: Fix this function to satisfy the new branded type
    return id;
}

// -------------------------------------------------------------
// API Simulation
// -------------------------------------------------------------

export function deleteUser(id: UserId) {
    // Assume a remote API call happens here using the ID
    return { success: true, deletedId: id };
}
