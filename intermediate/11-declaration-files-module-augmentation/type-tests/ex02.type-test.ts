import { runPlugin } from '../src/ex02-module-augmentation';

// Ensuring the types resolve.
// @ts-expect-error - Ensure we didn't just type it as `any` taking all arguments
declare const logger: import('my-logger').Logger;
logger.sendToDatadog(123);
