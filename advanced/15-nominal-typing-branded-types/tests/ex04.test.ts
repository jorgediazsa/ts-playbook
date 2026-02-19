import { describe, it, expect } from 'vitest';
import { hydrateProduct, ProductDTO } from '../src/ex04-serialization';

describe('Exercise 15.04: Serialization & Hydration', () => {
    it('correctly maps the dto string properties into the branded properties', () => {
        const dto: ProductDTO = { id: 'prod_1', name: 'Shoes', priceRaw: 5000 };
        const product = hydrateProduct(dto);

        // Once the hydrate function is fixed, price should map from priceRaw.
        // Right now the broken `as unknown as Product` fails this at runtime.
        expect(product.price).toBe(5000);
        expect(product.id).toBe('prod_1');
    });
});
