import { safeCapture } from '../src/ex02-unsafe-vendor';
import { Expect, Equal } from '../../type-utils';

type R1 = Expect<Equal<ReturnType<typeof safeCapture>, Promise<boolean>>>;
