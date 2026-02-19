import { describe, it, expect } from 'vitest';
import { createEventRouter, SystemEvents } from '../src/ex01-contextual-typing';

describe('Exercise 01: Contextual Typing', () => {

    it('infers the correct payload type in the callback without manual annotation', () => {
        const router = createEventRouter<SystemEvents>();

        let receivedPayload: any = null;

        // By fixing the `on` signature, `event` should contextually be inferred 
        // strictly as `{ errorCode: number, message: string }`, without writing `(event: ...)` block
        router.on('system.error', (event) => {
            receivedPayload = event;

            // If contextual typing works, TS won't complain here because `errorCode` is known
            const code: number = event.errorCode;
            expect(typeof code).toBe('number');
        });

        // @ts-expect-error - Expected to fail until `eventName` parameter is strictly typed to `keyof EventMap`
        router.on('unknown.event', (event) => { });

        router.emit('system.error', { errorCode: 500, message: 'Crash!' });

        expect(receivedPayload).toEqual({ errorCode: 500, message: 'Crash!' });
    });

});
