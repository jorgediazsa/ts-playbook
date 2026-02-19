/**
 * EXERCISE 2: Module Augmentation
 * 
 * You are using a third-party library, `my-logger`. It exports a `Logger` class.
 * You have installed a plugin that adds a `sendToDatadog()` method to instances
 * of `Logger` at runtime.
 * 
 * TypeScript doesn't know about this plugin. You need to augment the `my-logger`
 * module so you can call `sendToDatadog()` without type errors.
 * 
 * GOAL:
 * 1. Read the simulated `my-logger` namespace below.
 * 2. It has an interface `Logger` with `info` and `error`.
 * 3. Below that, we try to call `logger.sendToDatadog()`, which fails compiler checks.
 * 4. Write a module augmentation using `declare module` to merge the new method
 *    into the `Logger` interface.
 */

// Simulated third-party module
declare module 'my-logger' {
    export interface Logger {
        info(msg: string): void;
        error(msg: string): void;
    }
}

// ------------------------------------------------------------------

import { Logger } from 'my-logger';

// TODO: Write a module augmentation here
// declare module 'my-logger' { ... }

// ------------------------------------------------------------------

export function runPlugin(logger: Logger) {
    logger.info('Starting app');

    // FIX ME: Property 'sendToDatadog' does not exist on type 'Logger'.
    // Fix it by providing the augmentation above.
    logger.sendToDatadog('App started metrics');
}
