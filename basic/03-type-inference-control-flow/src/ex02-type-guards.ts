/**
 * EXERCISE 2: Custom Type Guards & Control Flow Analysis
 * 
 * TypeScript's CFA (Control Flow Analysis) narrows built-in types well
 * (`typeof x === 'string'`), but it needs help when you extract logic into 
 * helper functions.
 * 
 * GOAL:
 * 1. Read `processUser`. It tries to use helper functions `isPremium` and `assertHasEmail`.
 * 2. Fix the typing of `isPremium` using the `is` keyword so TS narrows `user` correctly in the `if`.
 * 3. Fix the typing of `assertHasEmail` using the `asserts` keyword so TS narrows `user` correctly after the call.
 */

export interface BasicUser {
    id: string;
    email?: string;
    plan: 'free' | 'premium';
}

export interface PremiumUser extends BasicUser {
    plan: 'premium';
    perks: string[];
}

export interface UserWithEmail extends BasicUser {
    email: string; // Required now
}

// ------------------------------------------------------------------
// The Helper Functions
// ------------------------------------------------------------------

// TODO: Update return type to act as a custom type guard (`value is PremiumUser`)
export function isPremium(user: BasicUser): boolean {
    return user.plan === 'premium' && 'perks' in user;
}

// TODO: Update return type to act as an assertion function (`asserts user is ...`)
export function assertHasEmail(user: BasicUser): void {
    if (!user.email) {
        throw new Error('User is missing an email!');
    }
}

// ------------------------------------------------------------------
// The Business Logic
// ------------------------------------------------------------------

export function processUser(user: BasicUser): string {
    if (isPremium(user)) {
        // If you correctly type `isPremium`, TS will know `user.perks` is safe to access here.
        return `Premium user has ${user.perks.length} perks!`; // FIX ME (Type error initially)
    }

    // If you correctly type `assertHasEmail`, TS will know `user.email` is no longer undefined below it.
    assertHasEmail(user);

    return `Sending email to ${user.email.toLowerCase()}`; // FIX ME (Type error initially)
}
