import { describe, it, expect } from 'vitest';
import { findForbiddenAnyUsages } from '../src/ex03-custom-rule';

describe('Exercise 18.03: Custom type-aware rule (standalone)', () => {
    it('flags any usages outside escapeHatch()', () => {
        const code = `
            type A = any;
            function ok() { const x: any = 1; return x; }
            function escapeHatch() { const y: any = 2; return y; }
        `;

        const findings = findForbiddenAnyUsages(code);
        // The `any` in `type A = any` and inside `ok()` must be flagged.
        // The `any` inside `escapeHatch()` is allowed.
        expect(findings.length).toBe(2);
        expect(findings.every(f => f.reason.includes('any'))).toBe(true);
    });
});
