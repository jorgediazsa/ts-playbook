import { describe, it, expect } from 'vitest';
import { getTopPerformerName, getEnvironmentVariable } from '../src/ex01-unchecked-indexed-access';

describe('Exercise 01: noUncheckedIndexedAccess', () => {

    describe('getTopPerformerName', () => {
        it('returns the first student name', () => {
            expect(getTopPerformerName([{ name: 'Alice', gpa: 4.0 }])).toBe('Alice');
        });

        it('returns "No students" when empty instead of crashing', () => {
            expect(getTopPerformerName([])).toBe('No students');
        });
    });

    describe('getEnvironmentVariable', () => {
        it('returns upper case value if exists', () => {
            expect(getEnvironmentVariable({ PORT: '8080' }, 'PORT')).toBe('8080');
        });

        it('throws descriptive error if missing', () => {
            expect(() => getEnvironmentVariable({}, 'DB_URL')).toThrow('Missing env var: DB_URL');
        });
    });

});
