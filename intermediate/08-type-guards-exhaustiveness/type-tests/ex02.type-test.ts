import { assertIsString } from '../src/ex02-assertion-functions';

function validate(val: unknown) {
    assertIsString(val, 'val');

    // TS must know it is exactly a string now
    const s: string = val;
    s.trim();

    // @ts-expect-error
    const n: number = val;
}
