# Topic 14: Template Literal Types

Template Literal Types (`\`${T}\``) allow you to manipulate text exactly like JavaScript template strings, but entirely within the type system. When combined with `infer`, they can parse strings into complex data structures.

## 1. String Manipulation Basics

TypeScript lets you construct new strings or match against strings natively.
```ts
type EventName<T extends string> = `${T}Changed`;
type Name = EventName<'state'>; // "stateChanged"
```

You can use `infer` inside template literals to parse strings format:
```ts
type ExtractProvider<T> = T extends `postgres://${infer User}:${infer Pass}@${infer Host}` ? Host : never;
```

## 2. Route Parameter Extraction

A classic senior-level exercise is strongly typing an Express or React Router URL. By recursively matching `/:${infer Param}/`, you can extract all dynamic segments of a route into a dictionary or a tuple.

## 3. Deriving Event Names (Dot Notation)

When bridging deeply nested backend state with frontend event buses, you often need dot-notation paths (e.g., `'user.settings.theme'`). You can use recursion, template literals, and mapped types to dynamically generate every valid dot-notation string for a given nested object.

## 4. Combinatorial Explosion (Warning)

If you use template literal types with unions, TypeScript generates the cartesian product of all combinations.
```ts
type Colors = 'red' | 'blue' | 'green';
type Sizes = 'small' | 'medium' | 'large';
type ClassNames = `${Colors}-${Sizes}`; // 9 variations
```
**Trap:** If you combine 5 unions of 10 items each, you generate `100,000` string variations. TypeScript caps union sizes (around 100,000) and will throw a `TS2590: Expression produces a union type that is too complex to represent.`

## Exercises

- **Ex01**: Implement standard string manipulation utilities: `Trim<T>`, `Split<T, Sep>`, and `Replace<T, From, To>`.
- **Ex02**: Implement a `RouteParams<T>` extractor that parses strings like `"/users/:id/posts/:postId"`.
- **Ex03**: Build a strongly-typed `EventBus` that automatically derives `"on"` event names from a nested state definition.
- **Ex04**: Use conditional template literals to validate incoming dynamic routes against a known good combinatorial matrix without blowing up the compiler.
