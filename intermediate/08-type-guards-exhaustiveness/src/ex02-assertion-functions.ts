/**
 * EXERCISE 2: Assertion Functions (`asserts`)
 * 
 * In data parsing pipelines or test setups, we often just want to throw
 * if the data is invalid, rather than wrapping our entire program in 
 * `if (isValid) { ... } else { return }` blocks.
 * 
 * Assertion functions tell TS: "If this function doesn't throw, the data IS this type".
 * 
 * GOAL:
 * 1. Read `assertIsString`.
 * 2. Update its return type using the `asserts condition` or `asserts val is string` syntax.
 * 3. Look at `parseEnvironment`. It's currently full of TS errors because TS doesn't
 *    know that `assertIsString` narrows the type.
 * 4. Once fixed, `parseEnvironment` should compile cleanly with no `as` casts.
 */

// TODO: Fix the return type to be an assertion: `asserts val is string`
export function assertIsString(val: unknown, keyName: string): void { // FIX ME
    if (typeof val !== 'string') {
        throw new Error(`Environment variable ${keyName} is missing or not a string`);
    }
}

// ------------------------------------------------------------------

export function parseEnvironment(env: Record<string, unknown>) {
    const dbUrl = env['DATABASE_URL'];

    // Notice how TS doesn't know what `dbUrl` is after this function currently.
    assertIsString(dbUrl, 'DATABASE_URL');

    // Once you fix the assertion signature above, TS will know `dbUrl` is a string here!
    return dbUrl.toLowerCase(); // FIX ME (Type error initially)
}
