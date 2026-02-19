/**
 * EXERCISE 1: Overloads vs Unions (Error Messages Matter)
 * 
 * Below is a typical real-world API written using function overloads.
 * The problem is that if a user makes a typo in the arguments, TypeScript
 * emits an obscure error pointing to the LAST overload, rather than explaining
 * the problem clearly.
 * 
 * GOAL:
 * 1. Refactor `createElement` to use Discriminated Unions instead of overloads.
 * 2. This will ensure autocomplete works better and error messages are precise.
 */

// --- OVERLOAD HELL (Bad pattern) ---
export function createElement(tag: 'div', attrs: { className?: string }): HTMLDivElement;
export function createElement(tag: 'span', attrs: { className?: string }): HTMLSpanElement;
export function createElement(tag: 'input', attrs: { type: 'text' | 'number', value?: string }): HTMLInputElement;
export function createElement(tag: string, attrs: any): HTMLElement {
    return document.createElement(tag) as any;
}

// ----------------------------------------------------
// TODO: Refactor into a Single Signature using Unions of Tuples or Param types.
// Hint: Create a mapping `ElementMap = { div: HTMLDivElement, input: HTMLInputElement, ... }`
// And `AttributesMap = { div: { className?: string }, input: { type: 'text' | 'number' } ... }`
// Then type it using generics `function create<K extends keyof ElementMap>(tag: K, attrs: AttributesMap[K]): ElementMap[K]`

interface ElementMap {
    div: HTMLDivElement;
    span: HTMLSpanElement;
    input: HTMLInputElement;
}

interface AttributesMap {
    div: { className?: string };
    span: { className?: string };
    input: { type: 'text' | 'number'; value?: string };
}

// FIX ME: Remove the overloaded implementation and replace it with a single inferred signature.
// Ensure K extends keyof ElementMap
export function createNode(tag: string, attrs: any): any {
    return null as any; // fake implementation
}
