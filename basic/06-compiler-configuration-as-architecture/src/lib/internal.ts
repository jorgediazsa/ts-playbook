/**
 * Internal module.
 *
 * This file is intentionally NOT exported via the local exports map.
 * Importing it through deep paths is considered an architectural violation.
 */

export function doSomethingPrivate(): string {
    return 'private response';
}
