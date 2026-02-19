import { isUserValid } from './legacy.js';

// This is a TS file importing from a JS file!
// Once `allowJs` and `checkJs` are on, `isUserValid` will be strictly typed in TS automatically.
export function bootstrap() {
    // FIX ME: Pass the proper payload to `isUserValid` expected by the JSDoc.
    // @ts-expect-error - Expected 1 argument but got 0
    const valid = isUserValid();
    return valid;
}
