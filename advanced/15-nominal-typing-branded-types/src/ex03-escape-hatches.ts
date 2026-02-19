/**
 * EXERCISE 3: Confining Escape Hatches
 * 
 * When dealing with Branded types, the `as` keyword (`val as BrandType`)
 * is an escape hatch. If this is sprinkled across 50 components, changing the 
 * validation logic becomes practically impossible.
 * 
 * GOAL:
 * 1. Read the bloated component code below. It's using `as` inline.
 * 2. Refactor it to use a centralized constructor/validation function.
 * 3. Demonstrate that the actual component logic shouldn't know the exact "shape" of the brand.
 */

import { Brand } from './ex01-branded-types';
export type AccountId = Brand<string, 'AccountId'>;

// --- BAD CODE ---
export function processRawData_BAD(rawString: string) {
    // Developer just forces it! No validation.
    const id = rawString as AccountId;
    databaseLookup(id);
}

// TODO: Create a safe boundary function
export function createAccountId(raw: string): AccountId {
    // Validate length or constraints here if needed
    if (!raw.startsWith('acc_')) throw new Error('Invalid Account ID');
    return raw as AccountId;
}

// TODO: Refactor the GOOD code to use `createAccountId`
export function processRawData_GOOD(rawString: string) {
    // FIX ME: Use the constructor instead of the escape hatch
    const id = rawString as AccountId;
    databaseLookup(id);
}

// --- Fakes ---
function databaseLookup(id: AccountId) { return true; }
