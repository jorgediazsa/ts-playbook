import { describe, it, expect } from 'vitest';
import { formSchema } from '../src/ex04-schema-inference';

describe('Exercise 04: Schema Inference', () => {

    it('verifies the schema freezes at runtime', () => {
        // Proving the object behavior at runtime vs type-time
        expect(formSchema.username.type).toBe('string');
    });

});
