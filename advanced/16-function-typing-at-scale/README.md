# Topic 16: Function Typing at Scale

API design relies heavily on how functions are typed. In TypeScript, there are often tradeoffs between ergonomics (how easy it is to use), compiler performance, and the quality of error messages shown to the consumer.

## 1. Overloads vs Unions

TypeScript allows function overloads to specify that a function can be called in multiple distinct ways.
However, overloads have drawbacks:
- The implementation signature (`function foo(a: any) { ... }`) must be manually compatible with all overloads.
- Inference can be confusing.
- Error messages often only point to the **last** overload, confusing users if they just slightly misspelled a parameter on the first overload.

**Rule of Thumb:**
If the return type doesn't fundamentally change based on the inputs, or if the inputs are mutually exclusive, use a Discriminated Union instead of overloads. Only use overloads when the return type maps directly to a specific set of parameters, and conditional types are too complex.

## 2. Currying and Inference Patterns

Partial application (Currying) relies heavily on TypeScript's ability to defer inference.
But fully abstract currying (`(...args: any[]) => ...`) destroys type safety. Bounding currying to a maximum arity (e.g. 2 to 4 arguments) and tracking them incrementally yields much better inference and editor support.

## 3. Strongly Typed Event Emitters

Typing `(event: string, callback: Function)` is an anti-pattern. Enterprise applications encode the pub-sub map into an interface (`EventMap`) and use mapped types to strongly tie the `event` literal to the exact `callback` signature.

## 4. Callback Variance Correctness

TypeScript's handling of function parameters is (mostly) **bivariant** when `strictFunctionTypes` is turned off, and **contravariant** when it's on. However, method signatures `foo(cb: Function)` are STILL bivariant even with `strictFunctionTypes: true`, a deliberate compiler choice to prevent the DOM API from crashing the type system.
This bivariance allows developers to pass callbacks that expect a narrower type than what the emitter actually provides, leading to runtime crashes. We explore how to fix this using `unknown` boundaries and invariant wrappers.

## Exercises

- **Ex01**: Refactor an Overload Hell into a Union-based API to improve Error Messages.
- **Ex02**: Implement `curry2` and `curry3` with strictly tracked tuple inference.
- **Ex03**: Build a strongly-typed `TypedEmitter` (on, off, emit).
- **Ex04**: Analyze unsafe callback bivariance. Refactor an API to prevent consumers from assuming narrower types.
