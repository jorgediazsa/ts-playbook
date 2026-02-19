import { formatData } from '@monorepo/utils';

export function processCoreLogic(input: string) {
    // If the Project Reference graph is broken, TS might complain it can't find @monorepo/utils
    // or it will parse utils/src directly instead of reading the .d.ts.
    return formatData(input) + ' PROCESS';
}
