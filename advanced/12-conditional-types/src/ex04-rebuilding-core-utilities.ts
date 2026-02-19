/**
 * EXERCISE 4: Rebuilding Core Utilities
 * 
 * TypeScript ships with `ReturnType<T>`, `Parameters<T>`, and `Awaited<T>`.
 * They are all built fundamentally on the `infer` keyword.
 * 
 * GOAL:
 * Rebuild these three core utilities from scratch.
 */

// 1. MyReturnType
// Extract the return type of a function T. If T is not a function, return never.
export type MyReturnType<T> = T; // FIX ME

// 2. MyParameters
// Extract the parameters of a function T as a tuple. If T is not a function, return never.
export type MyParameters<T> = T; // FIX ME

// 3. MyAwaited
// Recursively unwrap Promises. If it's a Promise<Promise<string>>, it resolves to string.
// (Simplified version: assume valid then-able objects for the sake of the exercise)
export type MyAwaited<T> = T; // FIX ME
