/**
 * EXERCISE 2: Type Erasure
 * 
 * TypeScript types disappear at runtime. If you parse a JSON payload and cast it `as User`,
 * TS believes you, but if the payload is missing fields, your app will crash when you access them.
 * 
 * GOAL:
 * 1. See how the provided `unsafeFetchConfig` lies to the compiler.
 * 2. Implement the `safeFetchConfig` using the provided schema validator.
 * 3. The `safeFetchConfig` should throw a descriptive error if the payload is invalid.
 * 4. The `safeFetchConfig` should narrow the return type properly without `as`.
 */

export interface SystemConfig {
    retries: number;
    timeoutMs: number;
    featureFlags: {
        newUi: boolean;
    };
}

// ------------------------------------------------------------------
// The Danger Zone (Type Erasure in Action)
// ------------------------------------------------------------------

export function unsafeFetchConfig(jsonString: string): SystemConfig {
    // This is a lie. JSON.parse returns `any`, and `as SystemConfig` trusts the developer.
    return JSON.parse(jsonString) as SystemConfig;
}

// ------------------------------------------------------------------
// The Safe Approach
// ------------------------------------------------------------------

// A mock runtime validator (similar to what Zod or Yup does under the hood)
export function isValidConfig(data: unknown): data is SystemConfig {
    if (typeof data !== 'object' || data === null) return false;

    const obj = data as Record<string, unknown>;

    if (typeof obj.retries !== 'number') return false;
    if (typeof obj.timeoutMs !== 'number') return false;

    const flags = obj.featureFlags;
    if (typeof flags !== 'object' || flags === null) return false;

    if (typeof (flags as Record<string, unknown>).newUi !== 'boolean') return false;

    return true;
}

export function safeFetchConfig(jsonString: string): SystemConfig {
    // TODO: Fix this implementation.
    // 1. Parse the JSON safely.
    // 2. Validate it at runtime.
    // 3. Return the structurally sound data, or throw a new Error('Invalid config format')

    const parsed = JSON.parse(jsonString);
    return parsed; // FIX ME
}
