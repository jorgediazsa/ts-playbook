/**
 * EXERCISE 4: Bivariance (The TypeScript Hack)
 * 
 * Function parameters in TypeScript are generally Contravariant (Strict).
 * However, method parameters on interfaces and object types are Bivariant 
 * (both Covariant AND Contravariant) for backward compatibility reasons.
 * 
 * This is a massive hole in the type system!
 * 
 * GOAL:
 * 1. Read `UnsafeEventConsumer` and `StrictEventConsumer`.
 * 2. Look at how `StrictEventConsumer` uses an arrow function property `(e: T) => void` 
 *    instead of a method signature `handle(e: T): void`.
 * 3. Verify in the code below that the method syntax allows an unsafe assignment to pass unnoticed.
 * 4. Fix the `UnsafeEventConsumer` so that it uses strictly contravariant function properties.
 */

export interface BaseEvent { timestamp: number; }
export interface ClickEvent extends BaseEvent { x: number; y: number; }

// TODO: This uses method syntax and is inherently BIVARIANT (unsafe).
// Refactor it to use arrow-function property syntax to make it strictly CONTRAVARIANT.
export interface UnsafeEventConsumer<T> {
    handle(event: T): void; // FIX ME: Change to `handle: (event: T) => void;`
}

// ------------------------------------------------------------------

export const clickHandler: UnsafeEventConsumer<ClickEvent> = {
    handle: (e) => console.log(e.x)
};

// Because of bivariance, TS allows this dangerous assignment:
export const dangerousConsumer: UnsafeEventConsumer<BaseEvent> = clickHandler;

// If a system fires a BaseEvent to `dangerousConsumer`, it will crash trying to read `e.x`.
export function fireEvent() {
    // If you fixed UnsafeEventConsumer to be strict, `dangerousConsumer` above will error.
    dangerousConsumer.handle({ timestamp: Date.now() });
}
