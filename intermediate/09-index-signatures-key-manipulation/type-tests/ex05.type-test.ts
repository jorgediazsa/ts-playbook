import { StrictSymbolMap, mySym, anyOtherSym } from '../src/ex05-symbol-numeric-keys';

const valid: StrictSymbolMap = {
    [mySym]: 'value'
};

// @ts-expect-error - If we correctly scoped the symbol interface, this fails
const invalid: StrictSymbolMap = {
    [anyOtherSym]: 'value'
};
