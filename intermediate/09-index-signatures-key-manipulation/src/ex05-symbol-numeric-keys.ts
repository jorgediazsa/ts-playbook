/**
 * EXERCISE 5: Symbol and Numeric Keys
 * 
 * JavaScript implicitly coerces numeric object keys to strings at runtime.
 * TypeScript `keyof` tracks whether an object was defined with numeric or string keys,
 * but an index signature `[key: string]` implicitly ALSO allows numbers!
 * 
 * Symbols are unique and act differently.
 * 
 * GOAL:
 * 1. Read `StringMap`. Notice `number` keys are mysteriously allowed!
 * 2. Look at `StrictSymbolMap`. We want it to ONLY accept the specific symbol `mySym`.
 * 3. Fix `StrictSymbolMap` so it doesn't use `[key: symbol]: string` (which allows ANY symbol)
 *    but instead strictly mandates `[mySym]`.
 */

export const mySym = Symbol('mySym');

export interface StringMap {
    [key: string]: string;
}

// Allowed! TS knows JS coerces `1` to `"1"`
export const sMap: StringMap = {
    1: 'one',
    "2": 'two'
};

// ------------------------------------------------------------------

// TODO: Fix this to strictly only allow `mySym`, not `anyOtherSym`.
export interface StrictSymbolMap {
    [key: symbol]: string; // FIX ME
}

export const anyOtherSym = Symbol('other');

export const mySymMap: StrictSymbolMap = {
    [mySym]: 'valid',
    // FIX ME: This should error once StrictSymbolMap is fixed!
    [anyOtherSym]: 'invalid'
};
