/**
 * EXERCISE 4: `object` vs `{}` vs `Record<string, unknown>`
 *
 * Seniors get bitten by this when designing APIs that accept "an object".
 *
 * - `object` means "any non-primitive" (including arrays and functions).
 * - `{}` means "anything except null/undefined" (YES: numbers and strings fit!).
 * - `Record<string, unknown>` means "a dictionary-like plain object".
 *
 * GOAL:
 * 1. Implement `isPlainRecord` to accept only non-null, non-array objects.
 * 2. Implement `mergeConfig` to merge two config objects safely.
 * 3. Reject primitives at runtime and at the type level.
 */

export type Config = Record<string, unknown>;

export function isPlainRecord(value: unknown): value is Record<string, unknown> {
  // TODO: Implement a strict guard:
  // - must be typeof === 'object'
  // - must be non-null
  // - must NOT be an array
  // - must NOT be a function
  return false; // FIX ME
}

export function mergeConfig(base: Config, override: unknown): Config {
  // TODO:
  // - If override is not a plain record, throw new Error('override must be an object')
  // - Return a shallow-merged object where override keys win.
  // - Keep the return type as `Config` (do not return `any`).
  return base; // FIX ME
}
