/**
 * EXERCISE 1: String Utilities
 * 
 * Using exact template literal inference, we can parse and reconstruct strings.
 * 
 * GOAL:
 * 1. Implement `Trim<T>`: Removes whitespace (' ' | '\n' | '\t') from both ends of a string.
 *    (Hint: You may need `TrimLeft` and `TrimRight` helpers).
 * 2. Implement `Split<T, Sep>`: Splits string T by separator Sep into an array of strings.
 * 3. Implement `Replace<T, From, To>`: Replaces the FIRST occurrence of From with To in T.
 */

type Whitespace = ' ' | '\n' | '\t';

// 1. Trim
// Hint: T extends `${Whitespace}${infer Rest}` for TrimLeft.
export type Trim<T extends string> = T; // FIX ME

// 2. Split
// Hint: T extends `${infer Left}${Sep}${infer Right}` ? [Left, ...Split<Right, Sep>] : [T]
export type Split<T extends string, Sep extends string> = T; // FIX ME

// 3. Replace
export type Replace<T extends string, From extends string, To extends string> = T; // FIX ME
