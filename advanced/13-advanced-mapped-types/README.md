# Topic 13: Advanced Mapped Types

Mapped types (`[K in keyof T]: T[K]`) allow constructing new object types by iterating over the keys of an existing type. When combined with conditional types, key remapping (`as`), and recursion, they unlock extreme expressiveness.

## 1. Modifiers (`+` and `-`)

You can add or remove `readonly` and `?` (optional) modifiers directly inside a mapped type.
- `+readonly [K in keyof T]` adds the readonly modifier (the `+` is implicit and usually omitted).
- `-readonly [K in keyof T]` completely removes the readonly modifier.
- `-? [K in keyof T]` removes the optional modifier, making the property required.

## 2. Key Remapping (`as`)

Introduced in TypeScript 4.1, `as` allows you to change the name of the key while iterating, or filter keys out entirely.
```ts
// Rename all keys to have a "get" prefix:
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

// Filter out all string keys:
type OnlyNumbers<T> = {
  [K in keyof T as T[K] extends number ? K : never]: T[K]
}
```
**Trap:** When remapping keys, you often lose the original strict key constraints (e.g., losing literal string keys if you aren't careful).

## 3. Recursive Mapped Types

You can call a mapped type on itself for properties that are objects to create deep utilities.
```ts
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}
```

## 4. Recursion Depth Limits

TypeScript limits how deeply a type can invoke itself to prevent infinite loops from freezing the compiler (`Type instantiation is excessively deep`).
- If you run `DeepPartial` on a DOM `Window` object, TS will traverse the prototype chain recursively until it crashes.
- **Escape Hatches:** You should constrain recursive mapped types by explicitly ignoring certain built-in objects (like `Function`, `Date`, `Set`, `Map`) or manually passing a "depth counter" tuple.

## Exercises

- **Ex01**: Implement modifier-based utilities: `Mutable<T>`, `RequiredKeys<T>`, `OptionalKeys<T>`.
- **Ex02**: Implement key remapping: `PrefixKeys<T, P>`, `RenameKeys<T, Map>`, and a `snake_case` to `camelCase` mapper.
- **Ex03**: Build `DeepReadonly<T>`, `DeepPartial<T>`, and a constrained `DeepPick<T, Path>`.
- **Ex04**: Encounter a recursion depth limit with an unbounded recursive type, and implement a bounded version that accepts a maximum depth parameter.
