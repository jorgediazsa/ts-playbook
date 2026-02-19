import { getToken } from '../src/ex03-declare-global';

const token: string = getToken();

// @ts-expect-error - It should be strictly typed as a string, not any
const tokenLength: number = getToken();
