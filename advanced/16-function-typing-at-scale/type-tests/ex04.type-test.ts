import { registerHandler_BAD, registerHandler_GOOD } from '../src/ex04-callback-variance';

class Animal { name = 'animal'; }
class Dog extends Animal { bark() { return 'woof'; } }

// --- BAD BEHAVIOR (TS accepts this despite the crash risk!) ---
registerHandler_BAD((dog: Dog) => {
    dog.bark(); // Runtime crash (it receives an Animal!)
});

// --- GOOD BEHAVIOR ---
registerHandler_GOOD({
    handle(dog: Dog) { dog.bark() }, // Bivariant escape hatch in interface (bad, but TS allows it structurally)

    // @ts-expect-error - `handleSafe` prevents bivariant widening! It strictly demands `Animal`.
    handleSafe: (dog: Dog) => {
        dog.bark();
    }
});
