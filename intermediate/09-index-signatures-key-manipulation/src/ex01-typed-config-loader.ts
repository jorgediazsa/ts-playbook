/**
 * EXERCISE 1: Typed Config Loader
 * 
 * When writing generic functions like `getConfig('databaseUrl')`, we want 
 * TypeScript to know exactly what the return type is based on the key passed.
 * 
 * GOAL:
 * 1. Read `AppConfig` and the `config` object.
 * 2. Look at `getConfig`. It currently accepts any string and returns `unknown`.
 * 3. Update the `getConfig` signature using Generics, `keyof`, and `T[K]` 
 *    indexed access types so that:
 *    - The `key` parameter is constrained to valid keys of `AppConfig`.
 *    - The return type strictly matches the type of `AppConfig[key]`.
 */

export interface AppConfig {
    databaseUrl: string;
    maxRetries: number;
    isProduction: boolean;
}

const config: AppConfig = {
    databaseUrl: 'postgres://localhost',
    maxRetries: 3,
    isProduction: false
};

// TODO: Fix signature: function getConfig<K extends ???>(key: K): ???
export function getConfig(key: string): unknown { // FIX ME
    return config[key as keyof AppConfig];
}
