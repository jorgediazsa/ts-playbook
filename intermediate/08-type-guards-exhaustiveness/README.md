# Topic 8: Type Guards & Exhaustiveness

TypeScript relies on Control Flow Analysis (CFA) to narrow types. For a compiler, knowing that a variable `is` a certain type is not enough; it needs strict mathematical proof that all other possibilities have been eliminated or explicitly handled.

## 1. Type Erasure & Custom Predicates

Because TypeScript types are completely erased at runtime, you cannot check `if (data instanceof UserInterface)`. When receiving data from an API or parsing JSON, it is inherently `unknown` or `any` at runtime.
- You **must** write a runtime validation function that returns a boolean.
- To tell TypeScript that this boolean result proves the type of the data, you use a **Custom Type Predicate** (`data is User`).
- **Dangerous Footgun**: Type predicates are essentially `as` casts wrapped in a boolean. If your runtime logic is flawed, TypeScript will trust you blindly and you will still crash at runtime.

## 2. Assertion Functions

For data parsing pipelines, returning `false` is often not what you want. You want the function to throw an error immediately if the data is invalid, halting execution. 
- You use an **Assertion Function** (`asserts data is User`).
- If the function returns normally (doesn't throw), TS knows that the variable has been successfully narrowed for the rest of the scope.

## 3. Discriminated Unions (Algebraic Data Types)

A Discriminated Union is a pattern where every object in a union shares a single literal property (usually `type` or `kind`).
- This allows TS to instantly narrow a massive union down to a single constituent using a `switch` statement or `if` block.
- It is the foundation of React/Redux action handlers, web socket event routing, and state machines.

## 4. Exhaustiveness Checking

When handling a Discriminated Union, you must guarantee that you have handled *every single possible case*. If a new state (e.g., `REFUNDED`) is added to an `OrderStatus` union six months from now, your compiler must scream at you everywhere that union is processed.
- **The `never` type**: If you narrow a union until there are no possibilities left, the resulting type is `never`.
- By assigning the exhaustive remainder to a function `assertNever(x: never)`, you force a compile-time error if a new union member is ever added and unhandled.

## 5. Pattern Matching Limitations

TypeScript's CFA is powerful, but it evaluates statements *line by line*. It struggles with:
- Narrowing a property of an object when you mutate the object inside a callback (the compiler assumes callbacks can ruin the scope).
- Correlated unions (e.g. `const config = isDev ? devConfig : prodConfig`). TS cannot track that `isDev` permanently correlates to `devConfig` 50 lines downstream.

## Exercises

- **Ex01**: Implement runtime-safe custom predicates for parsing `unknown` JSON.
- **Ex02**: Implement a throwing assertion pipeline (`asserts`).
- **Ex03**: Build a Reducer using Discriminated Unions.
- **Ex04**: Enforce exhaustive `switch` block completeness with `assertNever`.
- **Ex05**: Fix a scenario where CFA breaks due to pattern matching limitations.
