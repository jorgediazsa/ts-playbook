/**
 * EXERCISE 2: Recursive Types (Type vs Interface)
 * 
 * Both `type` and `interface` can be recursive. However, `interface` handles
 * deep trees significantly better because the TS compiler leverages object 
 * blueprint caching. Recursive `type` aliases, combined with conditional types 
 * or intersections, often hit compiler recursion depth limits much sooner.
 * 
 * GOAL:
 * You are building a UI Tree for a visual editor.
 * 1. Read `TreeNodeType`. It is deeply recursive using a `type` alias.
 * 2. Look at the `buildDeepTree` function. Notice how TS handles it (or doesn't).
 * 3. Refactor ONLY `TreeNodeType` to be an `interface TypeNodeInterface` 
 *    that `extends` the base properties.
 * 4. See the type-tests pass proving the interface handles depth safely.
 */

// ------------------------------------------------------------------
// The Recursive Type Trap
// ------------------------------------------------------------------

// TODO: Refactor this into an `interface` to significantly improve
// type-checker performance and depth tolerance.
export type TreeNodeType = {
    id: string;
    type: 'box' | 'text' | 'image';
    children?: TreeNodeType[];
};

// ------------------------------------------------------------------
// The Business Logic
// ------------------------------------------------------------------

export function countNodes(node: TreeNodeType): number {
    if (!node.children || node.children.length === 0) return 1;
    return 1 + node.children.reduce((acc, child) => acc + countNodes(child), 0);
}
