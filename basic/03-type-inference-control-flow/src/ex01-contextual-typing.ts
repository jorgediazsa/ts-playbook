/**
 * EXERCISE 1: Contextual Typing
 * 
 * "Contextual typing" is when TS uses the location of an expression to infer its type.
 * It's why you don't need to type `e` in `element.addEventListener('click', (e) => {})`.
 * 
 * GOAL:
 * 1. Read the `createEventRouter` function. It takes an Event Map and route handlers.
 * 2. Currently, the `on` method forces the user to manually type the `event` 
 *    parameter, or it falls back to `any`/`unknown`.
 * 3. FIX the types of the `on` method so that when a user listens to `'user.login'`, 
 *    the callback parameter `event` is strictly inferred as `{ userId: string; timestamp: number }`.
 */

export interface SystemEvents {
    'user.login': { userId: string; timestamp: number };
    'user.logout': { userId: string };
    'system.error': { errorCode: number; message: string };
}

// ------------------------------------------------------------------
// The Event Router (Needs better generics)
// ------------------------------------------------------------------

export function createEventRouter<EventMap extends Record<string, any>>() {
    const handlers: Record<string, Function[]> = {};

    return {
        // TODO: Fix the signature of `eventName` and `callback`.
        // Hint: `eventName` should be constrained to `keyof EventMap`.
        // Hint: `callback` should receive the specific payload type for that `eventName`.
        on(eventName: string, callback: (event: any) => void) {
            if (!handlers[eventName]) handlers[eventName] = [];
            handlers[eventName].push(callback);
        },

        // A helper to emit the events (already typed correctly if `on` is fixed)
        emit<K extends keyof EventMap>(eventName: K, payload: EventMap[K]) {
            const fns = handlers[eventName as string] || [];
            fns.forEach(fn => fn(payload));
        }
    };
}
