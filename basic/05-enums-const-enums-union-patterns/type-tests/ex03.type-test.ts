import { parseError, RawErrorCode } from '../src/ex03-modern-enum-pattern';

parseError(404);
parseError(RawErrorCode.SERVER_ERROR);

// @ts-expect-error - If the user fixed the ErrorCode union type, 999 should fail.
parseError(999);
