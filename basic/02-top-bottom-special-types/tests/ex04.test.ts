import { describe, it, expect } from 'vitest';
import { isPlainRecord, mergeConfig } from '../src/ex04-object-types';

describe('Exercise 04: object vs {} vs Record', () => {
  describe('isPlainRecord', () => {
    it('accepts plain objects', () => {
      expect(isPlainRecord({})).toBe(true);
      expect(isPlainRecord({ a: 1 })).toBe(true);
    });

    it('rejects null, arrays, functions, and primitives', () => {
      expect(isPlainRecord(null)).toBe(false);
      expect(isPlainRecord([])).toBe(false);
      expect(isPlainRecord(() => undefined)).toBe(false);
      expect(isPlainRecord('x')).toBe(false);
      expect(isPlainRecord(1)).toBe(false);
      expect(isPlainRecord(true)).toBe(false);
    });
  });

  describe('mergeConfig', () => {
    it('shallow merges with override winning', () => {
      const base = { retries: 3, flags: { newUi: false } };
      const merged = mergeConfig(base, { retries: 10 });
      expect(merged).toEqual({ retries: 10, flags: { newUi: false } });

      // Confirm shallow merge (intentional): nested objects are not deep-merged.
      const merged2 = mergeConfig(base, { flags: { newUi: true } });
      expect(merged2).toEqual({ retries: 3, flags: { newUi: true } });
    });

    it('throws for non-object overrides', () => {
      expect(() => mergeConfig({ a: 1 }, 'nope')).toThrow('override must be an object');
      expect(() => mergeConfig({ a: 1 }, 123)).toThrow('override must be an object');
      expect(() => mergeConfig({ a: 1 }, null)).toThrow('override must be an object');
      expect(() => mergeConfig({ a: 1 }, [])).toThrow('override must be an object');
    });
  });
});
