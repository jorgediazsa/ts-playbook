import { FileState } from '../src/ex03-discriminated-unions';

const validUpload: FileState = { state: 'UPLOADING', progress: 10 };
const validSuccess: FileState = { state: 'SUCCESS', url: '/test.png' };

// @ts-expect-error - If it is a proper discriminated union, progress doesn't exist on SUCCESS
const invalidSuccess: FileState = { state: 'SUCCESS', url: '/test', progress: 50 };

// @ts-expect-error - FAILED requires errorMessage
const invalidFailure: FileState = { state: 'FAILED' };
