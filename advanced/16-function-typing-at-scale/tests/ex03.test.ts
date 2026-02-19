import { describe, it, expect } from 'vitest';
import { TypedEmitter, AppEvents } from '../src/ex03-event-emitter';

describe('Exercise 16.03: Event Emitters', () => {
    it('triggers registered callbacks at runtime', () => {
        const emitter = new TypedEmitter<AppEvents>();
        let triggered = false;

        emitter.on('login', payload => {
            // payload will naturally infer to { userId: string } once fixed!
            expect(payload.userId).toBe('123');
            triggered = true;
        });

        emitter.emit('login', { userId: '123' });
        expect(triggered).toBe(true);
    });
});
