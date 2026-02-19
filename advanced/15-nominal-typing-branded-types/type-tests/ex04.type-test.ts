import { hydrateProduct, ProductDTO } from '../src/ex04-serialization';

// Valid usage
const dto: ProductDTO = { id: 'prod_1', name: 'x', priceRaw: 100 };
const prod = hydrateProduct(dto);

// @ts-expect-error - Can't assign primitive to brand directly
prod.id = 'foo';
