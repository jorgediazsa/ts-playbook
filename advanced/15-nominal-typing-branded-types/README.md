# Topic 15: Nominal Typing & Branded Types

TypeScript uses a **Structural Type System**. This means that if two objects or primitives have the exact same structure or type, TypeScript considers them identical, regardless of what they conceptually represent.

A `string` representing a User ID is type-compatible with a `string` representing an Email. Passing a User ID into an email sender function usually results in a runtime crash, but standard TypeScript cannot prevent this.

```ts
type UserId = string;
type Email = string;
function sendEmail(to: Email) {} 
const id: UserId = "12345";
sendEmail(id); // TS Allows this!
```

## 1. Nominal Typing via "Branded Types"

To simulate nominal typing (where types are distinct based on their explicit name/identity, not just their structure), we use a pattern known as **Branding** (or Opaque Types).

We intersect the base primitive with a unique, phantom object shape that doesn't actually exist at runtime.

### Intersection Branding
```ts
type Brand<K, T> = K & { __brand: T };
type UserId = Brand<string, 'UserId'>;
type Email = Brand<string, 'Email'>;
```
Now, `UserId` and `Email` are completely incompatible at compile time, despite both being strings at runtime.

### Symbol Branding
Using `unique symbol` prevents the theoretical collision of someone manually passing an object with a `__brand` property.
```ts
declare const brand: unique symbol;
type Brand<K, T> = K & { [brand]: T };
```

## 2. Boundaries and Constructors

Since branded types require properties that don't exist at runtime, you cannot assign a raw string to a `UserId` directly. You must use a "constructor" or "validator" function.

```ts
function makeUserId(id: string): UserId {
  // We use `as` here because we are at the edge of the domain boundary.
  return id as UserId; 
}
```

**Architectural Rule**: The use of `as BrandedType` (the escape hatch) MUST be strictly confined to validation boundaries. It should never be sprinkled throughout the application code.

## 3. Serialization realities

Branded types only exist in the compiler. When `JSON.stringify` or `JSON.parse` is called, the brand information is lost. When hydrating data from an API, database, or cache, you receive raw primitives (`unknown` or `string`), and must explicitly re-validate or re-brand them before they enter the core domain.

## Exercises

- **Ex01**: Implement the core `Brand` utility and construct `UserId` and `MoneyCents`. Demonstrate preventing accidental primitive mixing.
- **Ex02**: Build a domain validation boundary ensuring an `unknown` payload becomes a fully typed struct composed of Branded primitives.
- **Ex03**: Analyze escape hatch confinement. Refactor raw type assertions into a centralized constructor.
- **Ex04**: Handle JSON serialization/deserialization safely preserving branded contexts.
