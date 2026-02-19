// EXERCISE 3: Module Resolution
// Because `tsconfig.json` uses "Bundler", it allows importing a package without extensions.
// If this codebase runs directly in Node (type: module) via TSX/Ts-node, it will crash.
import { processCoreLogic } from '@monorepo/core';

export function initApp() {
    console.log(processCoreLogic('start'));
}
