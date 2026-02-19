/**
 * EXERCISE 1: Safe Parsing Pipeline (`unknown` vs `any`)
 * 
 * In standard TypeScript, catching an error or parsing JSON gives you `any`
 * (or `unknown` in modern TS `catch(e)` depending on settings).
 * 
 * Using `any` allows you to accidentally access properties that might not exist.
 * Using `unknown` forces you to prove what the type is before using it.
 * 
 * GOAL:
 * 1. Replace the `any` types in `processEventUnsafe` with `unknown` in `processEventSafe`.
 * 2. Implement the missing type guards to narrow the `unknown` payload into an `AnalyticsEvent`.
 * 3. Make the tests pass.
 */

export interface AnalyticsEvent {
    eventName: string;
    timestamp: number;
    properties: Record<string, unknown>;
}

// ------------------------------------------------------------------
// The Problem (Using `any`)
// ------------------------------------------------------------------

export function processEventUnsafe(payload: any): boolean {
    // Danger! payload might be null, a string, or an object missing properties.
    // TS allows these calls but they crash at runtime if payload is bad.
    if (payload.eventName === 'click') {
        console.log(payload.properties.buttonId);
    }
    return true;
}

// ------------------------------------------------------------------
// The Solution (Using `unknown` and Type Guards)
// ------------------------------------------------------------------

export function isRecord(value: unknown): value is Record<string, unknown> {
    // TODO: Implement a type guard that confirms `value` is a non-null object
    return false; // FIX ME
}

export function isAnalyticsEvent(value: unknown): value is AnalyticsEvent {
    // TODO: Implement a type guard combining `isRecord` and checking the 
    // 'eventName' (string), 'timestamp' (number), and 'properties' (object).
    return false; // FIX ME
}

export function processEventSafe(payload: unknown): boolean {
    // TODO: Refactor this to use the `isAnalyticsEvent` guard.
    // If valid, return true (and you should have full intellisense on payload).
    // If invalid, return false.

    // @ts-expect-error - Because payload is unknown, you cannot access properties. Prove it first!
    const name = payload.eventName;

    return false; // FIX ME
}
