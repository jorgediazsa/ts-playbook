import { Result } from '../src/ex02-default-generics';

// Should work without the second generic argument:
const standardResult: Result<string> = {
    success: false,
    error: new Error('Standard error')
};

// Should still allow passing a custom error type:
const customResult: Result<string, number> = {
    success: false,
    error: 404
};

// @ts-expect-error - It should enforce the error type is what we provided
const badResult: Result<string, number> = {
    success: false,
    error: 'Not a number'
};
