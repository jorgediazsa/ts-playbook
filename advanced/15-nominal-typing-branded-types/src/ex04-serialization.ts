/**
 * EXERCISE 4: Serialization and Safe Rehydration
 * 
 * Brands get lost during JSON.stringify. How do we cleanly type the API responses
 * that contain them?
 * 
 * GOAL:
 * 1. Define an API DTO (Data Transfer Object) which uses standard primitives.
 * 2. Define a Domain Model which uses branded types.
 * 3. Write a mapper that safely hydrates the DTO into the Domain Model.
 */

import { Brand } from './ex01-branded-types';

export type ProductId = Brand<string, 'ProductId'>;
export function makeProductId(raw: string): ProductId { return raw as ProductId; }

// DTO from backend
export interface ProductDTO {
    id: string;      // Just a string
    name: string;
    priceRaw: number; // Just a number
}

// Domain Object
export type Cents = Brand<number, 'Cents'>;
export function makeCents(n: number): Cents { return n as Cents; }

export interface Product {
    id: ProductId;
    name: string;
    price: Cents;
}

// TODO: Implement the mapper bridging the untyped DTO to the branded Domain
export function hydrateProduct(dto: ProductDTO): Product {
    // FIX ME: This returning cast completely bypasses safety.
    // Properly map and construct the properties using the boundary functions.
    return dto as unknown as Product;
}
