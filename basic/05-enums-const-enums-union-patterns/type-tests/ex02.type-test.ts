import { FeatureFlag } from '../src/ex02-isolated-modules';

// If FeatureFlag remains a const enum, TS might complain here under `isolatedModules`
// if `--preserveConstEnums` or similar strict bundler options are mocked.
// The user fix is to drop the 'const' keyword.
const flag: FeatureFlag = FeatureFlag.BetaEditor;
