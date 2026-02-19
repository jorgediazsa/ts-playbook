/**
 * EXERCISE 4: `moduleResolution`
 * 
 * In older TS versions (`moduleResolution: "Node"`), you could import *any* file
 * inside a package by typing the exact path (e.g. `import {x} from 'pkg/internal'`).
 * 
 * Under `"NodeNext"` or `"Bundler"`, TypeScript strictly respects the 
 * `package.json` `"exports"` map! If an internal file isn't explicitly exported
 * in `package.json`, TS correctly tells you that importing it will fail at runtime.
 * 
 * GOAL:
 * 1. Read `basic/06-.../src/lib/package.json`. Notice it only exports `"."` (index).
 * 2. Look at the imports below. The second import gives a TS error under modern resolution.
 * 3. FIX the code below to stop using the internal import, and instead 
 *    use the public `doSomethingPublic()` API.
 */

import { doSomethingPublic } from './lib';

// TODO: This import generates an error because `fake-pkg` doesn't expose it in "exports".
// Remove the internal import and fix `executeTask`.
// @ts-expect-error - (Keep this comment until you remove the import below to satisfy tests)
import { doSomethingPrivate } from './lib/internal'; // FIX ME (Delete this)

export function executeTask() {
    // We should rely on the public API, not internal paths!
    return doSomethingPrivate(); // FIX ME (Change to doSomethingPublic)
}
