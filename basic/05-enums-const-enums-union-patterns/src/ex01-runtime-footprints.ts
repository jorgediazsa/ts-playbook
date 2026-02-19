/**
 * EXERCISE 1: Runtime Footprints & Reverse Mappings
 * 
 * Standard numeric enums create a "reverse mapping" object at runtime.
 * While convenient for looking up names by ID, it heavily pollutes the
 * object keys and breaks `Object.values()` iterations.
 * 
 * GOAL:
 * 1. Read the `LogLevel` numeric enum.
 * 2. Attempt to use `Object.values()` in the `printAllLevels` function.
 * 3. Notice in the tests how it prints out `0, 1, 2` AND `DEBUG`, `INFO`, `ERROR`.
 * 4. Refactor `LogLevel` to a string enum to fix the `Object.values()` bug 
 *    (String enums do NOT generate reverse mappings).
 */

// TODO: This is a numeric enum implicitly (DEBUG = 0, INFO = 1, etc.)
// Refactor it into a String Enum where DEBUG = 'DEBUG', etc., 
// to prevent reverse-mapping pollution.
export enum LogLevel {
    DEBUG,
    INFO,
    ERROR
}

export function printAllLevels(): string[] {
    // If LogLevel is numeric, Object.values returns: [ '0', '1', '2', 'DEBUG', 'INFO', 'ERROR' ]
    // If it's a string enum, it cleanly returns: [ 'DEBUG', 'INFO', 'ERROR' ]
    return Object.values(LogLevel).map(val => String(val)); // FIX ME (by changing the enum above)
}
