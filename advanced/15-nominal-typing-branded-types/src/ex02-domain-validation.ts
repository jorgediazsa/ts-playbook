/**
 * EXERCISE 2: Domain Boundary Validation
 * 
 * Data arriving from an API is usually `unknown`. We want to validate
 * and convert it directly into a complex domain object containing branded primitives.
 * 
 * GOAL:
 * 1. Read `Email` and `UserId` branded types.
 * 2. Implement `validateUserPayload` which checks an `unknown` payload.
 * 3. It should return a strongly typed `User` if valid, or throw an Error.
 */

export declare const brand: unique symbol;
export type Brand<T, N> = T & { [brand]: N };
export type Email = Brand<string, 'Email'>;
export type UserId = Brand<string, 'UserId'>;

export interface User {
    id: UserId;
    contactEmail: Email;
    // Imagine 20 more fields
}

// Helper boundary functions
export function parseEmail(val: unknown): Email {
    if (typeof val !== 'string' || !val.includes('@')) throw new Error('Invalid email');
    return val as Email;
}
export function parseUserId(val: unknown): UserId {
    if (typeof val !== 'string') throw new Error('Invalid user ID');
    return val as UserId;
}

// TODO: Validate that the unknown payload has `id` and `contactEmail`,
// then pass them through the boundary functions to build the domain entity.
export function validateUserPayload(payload: unknown): User {
    // 1. Is it an object?
    // 2. Validate id and contactEmail
    // 3. Return the assembled User

    // FIX ME
    return payload as any;
}
