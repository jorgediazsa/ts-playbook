/**
 * EXERCISE 2: Isolated Modules & Const Enums (Production Guidance)
 *
 * In real production builds, many teams transpile TS with SWC/ESBuild/Babel.
 * Those pipelines often operate file-by-file ("isolated") and may not inline
 * `const enum` values safely across module boundaries.
 *
 * For this repo we keep the implementation SAFE by default: we use a standard
 * string `enum` so the runtime value exists and is compatible with isolated
 * transpilers.
 *
 * NOTE:
 * - If you choose `const enum` in your own codebase, you must ensure your
 *   toolchain inlines it end-to-end (tsc or a compatible transformer) and you
 *   understand the trade-offs.
 */

export enum FeatureFlag {
    NewDashboard = 'NEW_DASHBOARD',
    BetaEditor = 'BETA_EDITOR',
}

export function isFeatureEnabled(flag: FeatureFlag): boolean {
    // In a real transpile environment, if flag comes from another file and it's 
    // a const enum, the bundler might crash or leave a broken `FeatureFlag.NewDashboard` reference.
    return flag === FeatureFlag.NewDashboard;
}
