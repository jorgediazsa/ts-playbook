import { getConfig } from '../src/ex01-typed-config-loader';

// If getConfig is properly typed, TS knows exactly what type comes back:
const url: string = getConfig('databaseUrl');
const retries: number = getConfig('maxRetries');

// @ts-expect-error - TS should know it's a number, not a string
const badRetries: string = getConfig('maxRetries');

// @ts-expect-error - Should not allow random string keys
getConfig('randomFeatureFlag');
