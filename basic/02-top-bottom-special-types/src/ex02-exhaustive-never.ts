/**
 * EXERCISE 2: Exhaustive Pattern Matching with `never`
 * 
 * The `never` type represents code that cannot possibly execute.
 * It is extensively used to guarantee that all cases of a Discriminated Union
 * (Algebraic Data Type) are handled. If a new case is added to the union,
 * the compiler points out exactly which `switch` statements need updating.
 * 
 * GOAL:
 * 1. Read the `UserAction` union.
 * 2. Complete the `reduceUserScore` function using a `switch` statement.
 * 3. Use the `assertUnreachable` helper in the `default` case to ensure
 *    compile-time safety.
 * 4. Notice `BAN_USER` is part of the union. Your `switch` must handle it.
 */

export type UserAction =
    | { type: 'LOGIN'; bonus: number }
    | { type: 'LOGOUT' }
    | { type: 'TWEET'; text: string }
    | { type: 'BAN_USER'; reason: string }
    ;

/**
 * An exhaustive check helper. 
 * If the value passed here is anything other than `never`, it's a compile error.
 */
export function assertUnreachable(x: never): never {
    throw new Error(`Unreachable code reached with value: ${JSON.stringify(x)}`);
}

export function reduceUserScore(currentScore: number, action: UserAction): number {
    // TODO: Fix this function to handle all UserAction types
    // LOGIN = Add `bonus` to currentScore
    // LOGOUT = Score remains unchanged
    // TWEET = Add 5 to currentScore
    // BAN_USER = Score drops to 0 immediately

    // NOTE: You MUST use a `switch(action.type)` statement and the 
    // `assertUnreachable(action)` pattern in the `default` case!

    return currentScore; // FIX ME
}
