# Topic 2: Top, Bottom & Special Types

In TypeScript, there are types that act as the mathematical "Top" (everything belongs to them) and "Bottom" (nothing belongs to them) of the type hierarchy, alongside a few other special types that developers often misunderstand.

## 1. Top Types: `any` vs `unknown`
A Top Type is a type that can accept *any* value. TS has two:
- **`any`**: The "unsafe" top type. It disables type checking entirely for whatever holds it. It acts as an escape hatch, allowing you to access properties or call methods that might not exist at runtime.
- **`unknown`**: The "safe" top type (introduced in TS 3.0). Like `any`, it accepts any value. Unlike `any`, you **cannot** perform any operations on it until you narrow it down (via type guards/typeof checks).
  - *Rule of thumb for Seniors*: Never use `any` unless absolutely forced by broken 3rd party typings. Always prefer `unknown` for user input, external APIs, and `catch(e)` blocks.

## 2. Bottom Type: `never`
A Bottom Type is a type that holds *no* values. You cannot assign anything to `never`.
- It represents an impossible state.
- It is most commonly used for **exhaustive pattern matching**. If you have a discriminated union (`type Action = {type: 'A'} | {type: 'B'}`), you can use `never` in a `switch` statement's `default` case to force the compiler to complain if a new action type is ever added to the union but not handled in the switch.

## 3. Function Returns: `void` vs `undefined`
- **`undefined`**: A specific value and type. If a function returns `undefined`, you *must* explicitly return `undefined` (or implicitly return nothing if the compiler allows).
- **`void`**: Means the function's return value *should be ignored*. A function typed as returning `void` can actually return a value (e.g. `return true`), but the caller is told by the type system that the value is `void` and cannot be accessed safely. This is specifically useful for callbacks (e.g., `Array.forEach` accepts `() => void`, but you can pass `() => list.push(1)` which returns a number).

## 4. Object Types: `object` vs `{}` vs `Record<string, unknown>`
- **`object`** (lowercase): Represents any non-primitive type (arrays, functions, objects). You can't assign `string` or `number` to it. You also can't access any properties on it safely.
- **`{}`** (empty object): Represents *any value that is not null or undefined*. Yes, you can assign a `string` to `{}`! This is a massive trap.
- **`Record<string, unknown>`**: A true dictionary object. It implies an object with string keys and an unknown value.

## Exercises in this Module:

- **Ex01 (`ex01-unknown-parsing.ts`)**: Replace dangerous `any` types with `unknown` and build a type-safe narrowing pipeline for API data.
- **Ex02 (`ex02-exhaustive-never.ts`)**: Implement an exhaustive switch case to guarantee domain rules are updated when a new union member is added.
- **Ex03 (`ex03-void-vs-undefined.ts`)**: Differentiate between `void` and `undefined` in higher-order callbacks and understand the assignability rules.
- **Ex04 (`ex04-object-types.ts`)**: Eliminate `{}` traps and design safe "object-like" boundaries using `object` and `Record<string, unknown>`.
