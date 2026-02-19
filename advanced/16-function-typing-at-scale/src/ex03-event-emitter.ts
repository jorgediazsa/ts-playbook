/**
 * EXERCISE 3: Strongly Typed Event Emitters
 * 
 * Writing `on(event: string, cb: Function)` is awful for maintainability.
 * A scalable pattern uses an `EventMap` interface mapping event names to payloads.
 * 
 * GOAL:
 * 1. Build a `TypedEmitter` class that takes an `EventMap` generic.
 * 2. `on(event, handler)` must strictly ensure handler accepts the exact payload for that event.
 * 3. `emit(event, payload)` must strictly ensure payload matches the event requirement.
 */

// Example EventMap
export interface AppEvents {
    login: { userId: string };
    logout: undefined;
    error: { code: number; message: string };
}

export class TypedEmitter<EventMap extends Record<string, any>> {
    private listeners: Record<string, Function[]> = {};

    // TODO: Fix the signatures below.
    // Hint: `event` should be `K extends keyof EventMap`.
    // `handler` should be `(payload: EventMap[K]) => void`.
    // Think carefully about how to handle `undefined` payloads (like 'logout').
    // Advanced: If `EventMap[K]` is undefined, the parameter should be optional.

    public on(event: string, handler: Function) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(handler);
    }

    // Same for emit
    public emit(event: string, payload?: any) {
        this.listeners[event]?.forEach(cb => cb(payload));
    }
}
