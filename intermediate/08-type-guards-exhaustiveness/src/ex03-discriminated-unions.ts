/**
 * EXERCISE 3: Discriminated Unions
 * 
 * Also known as Algebraic Data Types, they are the best way to handle
 * complex mutually-exclusive states (like Redux actions, API responses, etc).
 * 
 * GOAL:
 * 1. Read the `FileState` type. It's currently a weak union.
 * 2. It has properties `progress` and `error` that might or might not exist 
 *    depending on the state, making it annoying to type-check.
 * 3. Rewrite `FileState` into a Discriminated Union where `state` is the discriminator.
 * 4. Fix `getUIState` to correctly narrow the union based on the `state` property.
 */

// TODO: Refactor this single interface into a union of three distinct interfaces.
// 1. { state: 'UPLOADING', progress: number }
// 2. { state: 'SUCCESS', url: string }
// 3. { state: 'FAILED', errorMessage: string }
export interface FileState { // FIX ME
    state: 'UPLOADING' | 'SUCCESS' | 'FAILED';
    progress?: number;
    url?: string;
    errorMessage?: string;
}

// ------------------------------------------------------------------

export function getUIState(file: FileState): string {
    // Once FileState is a discriminated union, TS will safely 
    // allow access to the specific properties inside each case block!
    switch (file.state) {
        case 'UPLOADING':
            return `Uploading: ${file.progress}%`; // FIX ME (TS errors initially)
        case 'SUCCESS':
            return `Done! See it at ${file.url}`; // FIX ME (TS errors initially)
        case 'FAILED':
            return `Error: ${file.errorMessage}`; // FIX ME (TS errors initially)
    }
}
