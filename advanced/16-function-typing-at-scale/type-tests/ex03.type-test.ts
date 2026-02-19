import { TypedEmitter, AppEvents } from '../src/ex03-event-emitter';

const emitter = new TypedEmitter<AppEvents>();

// Correct usage
emitter.on('login', payload => payload.userId);
emitter.emit('login', { userId: '123' });
emitter.emit('logout');

// Bad event names
// @ts-expect-error
emitter.on('fake', () => { });
// @ts-expect-error
emitter.emit('fake');

// Bad payloads
// @ts-expect-error
emitter.emit('login', { wrongToken: 'x' });
// @ts-expect-error
emitter.on('login', (payload: { bad: boolean }) => { });

// Ensuring optional payload works for `logout` (since it's undefined)
// @ts-expect-error
emitter.emit('logout', { shouldNotTakeArgument: true });
