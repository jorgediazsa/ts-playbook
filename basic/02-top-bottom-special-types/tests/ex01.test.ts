import { describe, it, expect } from 'vitest';
import { isRecord, isAnalyticsEvent, processEventSafe } from '../src/ex01-unknown-parsing';

describe('Exercise 01: Safe Parsing with Unknown', () => {

    describe('isRecord', () => {
        it('returns true for plain objects', () => {
            expect(isRecord({})).toBe(true);
            expect(isRecord({ a: 1 })).toBe(true);
        });

        it('returns false for null, undefined, arrays, and primitives', () => {
            // Arrays are objects, but typically in these parsers we strictly want Record objects.
            // EITHER behavior (allowing or rejecting array) is acceptable if handled consistently,
            // but standard object-checks should reject nulls.
            expect(isRecord(null)).toBe(false);
            expect(isRecord(undefined)).toBe(false);
            expect(isRecord('string')).toBe(false);
            expect(isRecord(123)).toBe(false);
            expect(isRecord([])).toBe(false);
        });
    });

    describe('isAnalyticsEvent', () => {
        it('returns true for valid event payloads', () => {
            const valid = {
                eventName: 'login',
                timestamp: 1612131231,
                properties: { method: 'oauth' }
            };
            expect(isAnalyticsEvent(valid)).toBe(true);
        });

        it('returns false for invalid event payloads', () => {
            expect(isAnalyticsEvent({ eventName: 'login' })).toBe(false); // missing props
            expect(isAnalyticsEvent({ timestamp: 123, properties: {} })).toBe(false); // missing name
            expect(isAnalyticsEvent(null)).toBe(false);
        });
    });

    describe('processEventSafe', () => {
        it('returns true when given a valid event', () => {
            expect(processEventSafe({
                eventName: 'click',
                timestamp: 123,
                properties: { x: 10 }
            })).toBe(true);
        });

        it('returns false when given garbage data', () => {
            expect(processEventSafe('garbage')).toBe(false);
            expect(processEventSafe(null)).toBe(false);
            expect(processEventSafe({})).toBe(false);
        });
    });
});
