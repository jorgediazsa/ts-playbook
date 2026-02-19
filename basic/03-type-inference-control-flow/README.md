# Topic 3: Type Inference & Control Flow

TypeScript rarely requires you to type every single variable. The compiler is incredibly smart about figuring out types via **Inference** and **Control Flow Analysis (CFA)**. However, understanding *how* it infers types is the difference between writing clean, safe code, and fighting the compiler.

## 1. Contextual Typing
TypeScript infers types in two directions:
- **Bottom-Up**: Inferring a variable's type based on its assigned value (`const x = 5` implies `number`).
- **Top-Down (Contextual Typing)**: Inferring the type of an expression based on the *context* where it is used. For example, in `window.addEventListener('click', (e) => {})`, TS knows `e` is a `MouseEvent` because the context (`'click'`) dictates the callback signature.

## 2. Control Flow Analysis (CFA)
When you use an `if` statement, `switch`, or early `return`, TS "narrows" the type of a variable.
- Example: If a type is `string | number`, and you do `if (typeof x === 'string')`, inside that block TS knows `x` is *strictly* a string.
- You can extend CFA by writing **Custom Type Guards** (`function isFish(pet: Pet): pet is Fish`).
- **Gotcha**: CFA is reset inside callbacks or closures because TS cannot guarantee when the callback will execute or if the variable will be mutated between the check and the execution.

## 3. Literal Widening
By default, if you declare `let obj = { url: "GET" }`, the type is inferred as `{ url: string }`. TS "widens" the literal `"GET"` to a generic `string` because it assumes you might want to mutate the object later.
- If you rely on exact literal types (e.g. `type Method = 'GET' | 'POST'`), widening breaks compilation when you pass `obj.url` to an API expecting `Method`.
- **Solution 1: `as const`**. Writing `let obj = { url: "GET" } as const` tells TS to *never* widen it, inferring a `readonly { url: "GET" }`.
- **Solution 2: `satisfies`** (TS 4.9+). Allows you to validate that an object structure matches a type, while *preserving* its specific inferred literal types, giving you the best of both worlds.

## Exercises in this Module:

- **Ex01 (`ex01-contextual-typing.ts`)**: Design an API that perfectly leverages contextual typing so that callbacks infer their arguments automatically without manual typing.
- **Ex02 (`ex02-type-guards.ts`)**: Fix a failing CFA inference using custom type predicates (`is`) and assertion functions (`asserts`).
- **Ex03 (`ex03-literal-widening-satisfies.ts`)**: Resolve configuration-object widening traps using `as const` and the `satisfies` operator.
