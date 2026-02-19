// EXERCISE 2: Pathological Type simulation
// This type forces TS to distribute a massive union, slowing down the checker.
export type HeavyMath<T> = T extends any ? (T extends any ? (T extends any ? T : never) : never) : never;

// FIX ME: Simplify this or use skipLibCheck if it's imported from an external lib.
export function formatData(data: string): string {
    return data.trim().toUpperCase();
}
