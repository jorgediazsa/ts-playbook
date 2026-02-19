import { StrictRoleDictionary } from '../src/ex02-index-signatures-vs-record';

// @ts-expect-error - Ensure it errors because it lacks USER and has invalid GUEST
const failFeatures: StrictRoleDictionary = {
    ADMIN: true,
    GUEST: false
};

const passFeatures: StrictRoleDictionary = {
    ADMIN: true,
    USER: false
};
