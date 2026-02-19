import { createLogger } from '../src/ex01-declaration-merging';

const logger = createLogger();

// 1. Core methods must exist
logger.info('System booting');
logger.error('Crash');

// 2. The augmented method MUST exist on the interface
// If the user hasn't successfully merged the interface, the following line will fail compiling.
logger.timer('Boot Time');

// 3. Typo methods should still fail
// @ts-expect-error
logger.timerx('Boot Time');
