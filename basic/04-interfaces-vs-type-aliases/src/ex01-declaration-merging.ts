/**
 * EXERCISE 1: Interface Declaration Merging (Plugin Augmentation)
 * 
 * When building libraries, you want users to be able to add their own 
 * methods or properties to your core objects (e.g., Vue plugins, Express req.user).
 * 
 * If your core object is a `type`, they cannot extend it without modifying your code.
 * If your core object is an `interface`, they can use "Declaration Merging".
 * 
 * GOAL:
 * 1. Read `CoreLogger` and how it is instantiated.
 * 2. In the "Consumer Land" section, use declaration merging to add a `timer` 
 *    method to the `CoreLogger` interface.
 * 3. Ensure the test passes and the type-tests show no errors.
 */

// ------------------------------------------------------------------
// Library Land (You cannot modify this block in a real scenario,
// but for this exercise, assume this is imported from 'my-logger')
// ------------------------------------------------------------------

export interface CoreLogger {
    info(msg: string): void;
    error(msg: string): void;
}

export function createLogger(): CoreLogger {
    const logger: any = {
        info: (msg: string) => console.log(msg),
        error: (msg: string) => console.error(msg),
    };
    return logger;
}

// ------------------------------------------------------------------
// Consumer Land (Your App Code)
// ------------------------------------------------------------------

// TODO: Using declaration merging, augment the `CoreLogger` interface 
// to include a new method: `timer(label: string): void;`

// FIX ME: Add the declaration merging block here.

// ------------------------------------------------------------------

export function addPlugin(logger: CoreLogger) {
    // We mutate the logger at runtime to add the new method.
    // We have to cast to `any` or `@ts-expect-error` here temporarily
    // because TS might not know about `timer` until you declare it above.
    (logger as any).timer = (label: string) => {
        console.log(`Timer ${label} started`);
    };
    return logger;
}
