/**
 * EXERCISE 1: Branded Primitives
 * 
 * Protect domain models from primitive obsession (treating all IDs, Names, Emails equally because they are all strings).
 * 
 * GOAL:
 * 1. Implement a `Brand<Type, Name>` generic using a unique symbol to prevent property collisions.
 * 2. Define `UserId` and `PostId` as branded strings.
 * 3. Define `Money` as a branded number.
 * 4. Ensure `UserId` cannot be assigned to `PostId` and vice-versa.
 */

declare const __brand: unique symbol; // Use this as the property key

// 1. Create the Brand helper.
// Hint: Intersect the base `Type` with an object containing `[__brand]: Name`.
export type Brand<Type, Name extends string> = Type; // FIX ME

// 2. Define domain types
export type UserId = string; // FIX ME: Make it Brand<string, 'UserId'>
export type PostId = string; // FIX ME: Make it Brand<string, 'PostId'>
export type Money = number; // FIX ME: Make it Brand<number, 'Money'>

// 3. Constructors (Escape hatches)
export function makeUserId(id: string): UserId {
    return id as UserId;
}

export function makePostId(id: string): PostId {
    return id as PostId;
}

export function makeMoney(amount: number): Money {
    if (amount < 0) throw new Error('Money cannot be negative');
    return amount as Money;
}
