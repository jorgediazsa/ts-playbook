/**
 * EXERCISE 3: Custom Type-Aware Rule (without ESLint deps)
 *
 * Senior teams often enforce architectural constraints via lint rules.
 * In a real repo you'd likely implement this as an ESLint rule using
 * @typescript-eslint tooling. That adds a lot of dependency + harness
 * complexity that isn't the point of this TypeScript roadmap.
 *
 * So this exercise implements the same core idea as a **standalone checker**
 * using the TypeScript compiler API:
 *   - flag any usage of the `any` type
 *   - allow `any` only inside a function named `escapeHatch`
 *
 * GOAL:
 * Implement `findForbiddenAnyUsages`.
 *
 * Requirements:
 * 1) Return one finding per `any` keyword.
 * 2) A usage is allowed if the nearest enclosing function-like declaration
 *    has the name `escapeHatch`.
 * 3) Support:
 *    - type annotations: `const x: any = ...`
 *    - type aliases: `type X = any`
 *    - generics: `Array<any>`
 *
 * Notes:
 * - This is NOT a full ESLint replacement; it's intentionally scoped.
 */

import ts from 'typescript';

export type AnyFinding = {
    line: number;
    column: number;
    reason: string;
};

function isAllowedByEscapeHatch(node: ts.Node): boolean {
    let current: ts.Node | undefined = node;
    while (current) {
        if (
            ts.isFunctionDeclaration(current) ||
            ts.isFunctionExpression(current) ||
            ts.isArrowFunction(current) ||
            ts.isMethodDeclaration(current)
        ) {
            // Named function declaration or named function expression
            if (ts.isFunctionDeclaration(current) && current.name?.text === 'escapeHatch') return true;
            if (ts.isFunctionExpression(current) && current.name?.text === 'escapeHatch') return true;

            // For arrow functions / methods, name is on the parent (variable/property)
            const parent = current.parent;
            if (ts.isVariableDeclaration(parent) && parent.name.getText() === 'escapeHatch') return true;
            if (ts.isPropertyAssignment(parent) && parent.name.getText() === 'escapeHatch') return true;
            if (ts.isMethodDeclaration(current) && current.name.getText() === 'escapeHatch') return true;

            return false;
        }
        current = current.parent;
    }
    return false;
}

/**
 * Find forbidden `any` usages.
 *
 * Starter behavior: return an empty array.
 * Fix it to satisfy the tests.
 */
export function findForbiddenAnyUsages(sourceText: string): AnyFinding[] {
    const sourceFile = ts.createSourceFile(
        'input.ts',
        sourceText,
        ts.ScriptTarget.ES2022,
        /*setParentNodes*/ true,
        ts.ScriptKind.TS
    );

    const findings: AnyFinding[] = [];

    function visit(node: ts.Node) {
        if (node.kind === ts.SyntaxKind.AnyKeyword) {
            if (!isAllowedByEscapeHatch(node)) {
                const pos = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
                findings.push({
                    line: pos.line + 1,
                    column: pos.character + 1,
                    reason: 'Forbidden `any` usage outside escapeHatch() boundary',
                });
            }
        }
        ts.forEachChild(node, visit);
    }

    // FIX ME:
    // 1) Walk the AST.
    // 2) Detect `any` keyword nodes.
    // 3) Allow them only when enclosed by a function-like named `escapeHatch`.
    // 4) Push findings with line/column for forbidden nodes.
    //
    // HINTS:
    // - Use `ts.forEachChild(node, visit)` recursion.
    // - `sourceFile.getLineAndCharacterOfPosition(pos)` gives you line/column.
    // - `isAllowedByEscapeHatch(node)` is provided.
    //
    // visit(sourceFile);

    return findings; // Should be non-empty once implemented
}
