import { createId, parseData } from 'vendor-lib';

const id: string = createId();
const parsed: { payload: string; success: boolean } | null = parseData('test');

// @ts-expect-error - Ensure parseData only accepts strings
parseData(123);
